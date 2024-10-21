import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CommonServiceService } from '../../services/common-service.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { CommonModule } from '@angular/common';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { catchError, map, Observable, of, tap } from 'rxjs';
import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { NzUploadChangeParam, NzUploadModule } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAffixModule } from 'ng-zorro-antd/affix';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
const phoneEmailRegex = /^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/;
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    NzGridModule,
    NzFlexModule,
    NzFlexModule,
    NzAffixModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    NzUploadModule,
    NzIconModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit, AfterViewInit {
  save() {
    this.value.push(this.login_form.value);

    this.common.storeRecipes('email', this.value);
  }
  public markers: any[];

  value: any[] = [];

  apiLoaded: Observable<boolean>;

  public login_form: FormGroup;

  constructor(
    private router: Router,
    private common: CommonServiceService,
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private msg: NzMessageService,
    private translate:TranslateService, private title:Title
  ) {
    this.markers = [];
    common.fetchData('email').subscribe((data) => {
      this.value = data as any;
    });
    this.login_form = fb.group({
      fullName: [null, Validators.required],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(phoneEmailRegex),
        ]),
      ],
      phoneNumber: [null, Validators.required],
      address: [null],
      projectInfo: [null, Validators.required],
    });

    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyDkp06MnfahObyCPRlGcKB480Pf2FUkPeA',
        'callback'
      )
      .pipe(
        tap((item) => console.log),
        map(() => true),
        catchError(() => of(false))
      );

      translate.stream('title.content').subscribe(item => {
        title.setTitle(this.translate.instant('title.ct') + item)
      })
  }
  ngAfterViewInit(): void {
    this.markerPositions.push({
      lat: 10.807976913907607,
      lng: 106.70333572406567,
    });
    this.markerPositions.push({lat:21.037937981813894, lng:105.79642918007957});
  }
  ngOnInit(): void {
    this.markers.push({
      position: {
        lat: 10.807976913907607,
        lng: 106.70333572406567,
      },
      label: {
        color: 'red',
        text: 'Madrid',
      },
    });

    // this.markers.push({
    //   position: {
    //     lat: 48.8615515,
    //     lng: 2.3112233
    //   },
    //   label: {
    //     color: "black",
    //     text: "Paris"
    //   }
    // });
  }

  openMenu() {
    this.common.open();
  }
  changeTo() {
    this.router.navigateByUrl('/');
  }

  options: google.maps.MapOptions = {
    center: {
      lat: 16.082962,
      lng: 108.057510,
    },
    zoom: 5,

    // Before intial load, options complains  "google is not defined"
    // Uncomment out the options
    /* 
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
      position: google.maps.ControlPosition.RIGHT_CENTER,
    },
    */

    streetViewControl: false,
    mapTypeControl: false,
  };

  /* 
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
    animation: google.maps.Animation.DROP,
  };
  */
  markerPositions: google.maps.LatLngLiteral[] = [];

  addMarker(event: any) {
    console.log(event.latLng.toJSON());
    this.markerPositions.push(event.latLng.toJSON());
  }

  handleChange({ file, fileList }: NzUploadChangeParam): void {
    const status = file.status;
    if (status !== 'uploading') {
      console.log(file, fileList);
    }
    if (status === 'done') {
      this.msg.success(`${file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      this.msg.error(`${file.name} file upload failed.`);
    }
  }
}
