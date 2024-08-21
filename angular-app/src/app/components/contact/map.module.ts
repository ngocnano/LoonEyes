import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUnuPXweOavCoI5FlyO5z4UXf_6y74Zfg',
    }),
  ],
  exports: [AgmCoreModule],
})
export class MapModule {}