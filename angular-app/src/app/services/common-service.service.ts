import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, fromEvent, takeUntil } from 'rxjs';
import { SIZE_TYPE } from './constan';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  private _unsubscriber$: Subject<any> = new Subject();
  public screenWidth$: BehaviorSubject<any> = new BehaviorSubject(null);
  public mediaBreakpoint$: BehaviorSubject<any> = new BehaviorSubject(null);
  public size = '';

  constructor() {
    this.init();
  }

  init() {
    this._setScreenWidth(window.innerWidth);
    this._setMediaBreakpoint(window.innerWidth);
    fromEvent(window, 'resize')
      .pipe(
        debounceTime(1000),
        takeUntil(this._unsubscriber$)
      ).subscribe((evt: any) => {
        this._setScreenWidth(evt.target.innerWidth);
        this._setMediaBreakpoint(evt.target.innerWidth);
      });
  }

  ngOnDestroy() {
    this._unsubscriber$.complete();
  }

  private _setScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  private _setMediaBreakpoint(width: number): void {
    if (width < 576) {
      this.mediaBreakpoint$.next('xs');
      this.size = SIZE_TYPE.XS;
    } else if (width >= 576 && width < 768) {
      this.size = SIZE_TYPE.SM;
      this.mediaBreakpoint$.next('sm');
    } else if (width >= 768 && width < 992) {
      this.size = SIZE_TYPE.MD;
      this.mediaBreakpoint$.next('md');
    } else if (width >= 992 && width < 1200) {
      this.size = SIZE_TYPE.LG;
      this.mediaBreakpoint$.next('lg');
    } else if (width >= 1200 && width < 1600) {
      this.size = SIZE_TYPE.XL;
      this.mediaBreakpoint$.next('xl');
    } else {
      this.size = SIZE_TYPE.XXL;
      this.mediaBreakpoint$.next('xxl');
    }
  }
}
