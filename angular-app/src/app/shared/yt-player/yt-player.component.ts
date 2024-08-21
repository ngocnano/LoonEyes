import { AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { YoutubePlayerComponent } from 'ngx-youtube-player';

@Component({
  selector: 'app-yt-player',
  standalone: true,
  imports: [YoutubePlayerComponent],
  templateUrl: './yt-player.component.html',
  styleUrl: './yt-player.component.css'
})
export class YtPlayerComponent implements AfterViewInit{
  @ViewChild('youTubePlayer') youTubePlayer!: ElementRef<HTMLDivElement>;
  @ViewChild('myDiv',{static: false}) myDiv!: ElementRef<HTMLDivElement>;
  domEl: any ;
// or do whatever you have to do to get the DOM Element

 triggerEvent(el: HTMLElement, evt: any): void {
    if (el && evt) {
        const fakeEvent = new Event(evt, {bubbles: false, cancelable: false});

        el.dispatchEvent(fakeEvent);
    }
}

  videoHeight!: number;
  videoWidth!: number;
  @Input('isAutoPlay')
  isAutoPlay = false;

  @Input('videoID') videoID: string = 'V462IsOV3js';

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.onResize();

    // window.addEventListener('resize', this.onResize.bind(this));
  }

  onResize(): void {
        // you can remove this line if you want to have wider video player than 1200px
        // console.log( this.elementRef.nativeElement.offsetWidth)
    this.videoWidth = 720;
        // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.7;
    this.changeDetectorRef.detectChanges();
  }

  id = 'V462IsOV3js';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
  private player:any;
  public ytEvent:any;

  onStateChange(event:any) {
    this.ytEvent = event.data;
    console.log(this.ytEvent)
  }
  savePlayer(player:any) {
    this.player = player;
    if(this.isAutoPlay){
      setTimeout(() => {
        console.log(this.domEl)
        this.triggerEvent(this.domEl, 'click')
        this.playVideo()
      },500)

    }

  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
