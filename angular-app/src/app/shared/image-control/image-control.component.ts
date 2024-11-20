import {
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { filter } from 'rxjs/operators';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@Component({
  selector: 'app-image-control',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    NzButtonModule,
    NzSpinModule
  ],
  template: `
    <div class="control-container" [style.width]="'100%'">
      <div class="image-container">
        @if (uploading()) {
          <nz-spin nzSimple></nz-spin>
        }

        @if (type==='img') {
          <img
          [src]="imageSource()"
          class="mat-elevation-z5 w"
          [style.opacity]="uploading() ? 0.5 : 1"
        />

        } @else {
          @if(imageSource()){
            <video width="100%" height="100%" controls           class="mat-elevation-z5 w"
          [style.opacity]="uploading() ? 0.5 : 1">
                  <source [src]="imageSource()" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
          }
        }
        <mat-progress-spinner
          [diameter]="50"
          mode="indeterminate"
          *ngIf="uploading()"
        />

      </div>

      <input
        #inputField
        hidden
        type="file"
        (change)="fileSelected($event)"
        (click)="inputField.value = ''"
      />
      <button nz-button nzType="primary" (click)="inputField.click()">
        {{type==='img' ? 'Select Photo' : 'Select video'}}
      </button>
    </div>
  `,
  styles: [
    `.w {
      width: 100%;
    }
      .control-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
      }

      .image-container {
        border-radius: 5px;
        position: relative;

        > mat-progress-spinner {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        > img {
          border-radius: inherit;
        }
      }
    `,
  ],
})
export class ImageControlComponent {
  imageWidth = signal(0);
  @Input({  }) set width(val: number) {
    this.imageWidth.set(val);
  }

  imageHeight = signal(0);
  @Input({  }) set height(val: number) {
    this.imageHeight.set(val);
  }

  imagePath = signal('');
  @Input({ required: true }) set path(val: string) {
    this.imagePath.set(val);
  }

  @Input() type = 'img'

  placeholder = computed(
    () => `https://placehold.co/${this.imageWidth()}X${this.imageHeight()}`
  );

  @Input()
  croppedImageURL = signal<string | undefined>(undefined);

  imageSource = computed(() => {
    return this.croppedImageURL() ?? this.placeholder();
  });

  uploading = signal(false);

  dialog = inject(MatDialog);

  fileSelected(event: any) {
    const file = event.target?.files[0];
    const filename = event.target?.files[0].name;
    if (file) {
      const fileBlob = new Blob([file]);
      this.uploadImage(fileBlob,filename);
    }
  }

  @Output() imageReady = new EventEmitter<string>();

  constructor() {
    effect(() => {
      if (this.croppedImageURL()) {
        this.imageReady.emit(this.croppedImageURL());
      }
    });
  }

  storage = inject(Storage);
  zone = inject(NgZone);

  async uploadImage(blob: Blob, fileName: string) {
    this.uploading.set(true);
    const storageRef = ref(this.storage, this.imagePath() + '/' + fileName);
    const uploadTask = await uploadBytes(storageRef, blob);
    const downloadUrl = await getDownloadURL(uploadTask.ref);
    this.croppedImageURL.set(downloadUrl);
    this.uploading.set(false);
  }
}
