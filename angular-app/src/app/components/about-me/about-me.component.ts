import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { YoutubePlayerComponent } from 'ngx-youtube-player';
import { YtPlayerComponent } from '../../shared/yt-player/yt-player.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [NzGridModule, YtPlayerComponent, NzDividerModule, TranslateModule],
  animations: [
    trigger('divStage', [])
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent implements OnInit {


  ngOnInit(): void {
    for(let i = 1; i < 20; i++){
      this.logo.push(i);
    }
  }

  logo:any = [];

  id = 'V462IsOV3js';
  playerVars = {
    cc_lang_pref: 'en',
  };
  version = '...';
  private player:any;
  public ytEvent:any;

  onStateChange(event:any) {
    this.ytEvent = event.data;
  }
  savePlayer(player:any) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

}
