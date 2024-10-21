import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { CommonServiceService } from './services/common-service.service';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HammerGestureConfig, HammerModule } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

registerLocaleData(vi);

export function initializeApp(appConfig: CommonServiceService) {
  return () => appConfig.loadData();
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'https://app-drone-da32e-default-rtdb.asia-southeast1.firebasedatabase.app/', '.json');
}

export class MyHammerConfig extends HammerGestureConfig  {
  override overrides = <any>{
      // override hammerjs default configuration
      'pan': { direction: Hammer.DIRECTION_HORIZONTAL  }
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: "top",
  })), provideNzI18n(vi_VN),  
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    importProvidersFrom(HammerModule),
    importProvidersFrom(FormsModule), provideAnimationsAsync(), provideHttpClient(), importProvidersFrom()]
};
