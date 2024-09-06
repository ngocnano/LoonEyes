import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime, forkJoin, fromEvent, map, takeUntil } from 'rxjs';
import { SIZE_TYPE } from './constan';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements OnDestroy {

  private _unsubscriber$: Subject<any> = new Subject();
  public screenWidth$: BehaviorSubject<any> = new BehaviorSubject(null);
  public mediaBreakpoint$: BehaviorSubject<any> = new BehaviorSubject(null);
  public menuChange: BehaviorSubject<any> = new BehaviorSubject(null);
  public changeMenuVisible: Subject<any> = new Subject();
  public size = '';

  menu = new BehaviorSubject([]);

  ct = new BehaviorSubject([]);

  intro = new BehaviorSubject([])


  new = new BehaviorSubject([])

  type = new BehaviorSubject([])

  project = new BehaviorSubject([])

  team = new BehaviorSubject([])

  constructor(private http: HttpClient, private message: NzMessageService) {
    this.fetchRecipes('menu', this.menu) as any;
    this.fetchRecipes('new', this.new) as any;
    this.fetchRecipes('ct', this.ct) as any;
    this.fetchRecipes('intro', this.intro) as any;
    this.fetchRecipes('type', this.type) as any;
    this.fetchRecipes('project', this.project) as any;
    this.fetchRecipes('team', this.team) as any;

    this.init();
  }


  storeRecipes(type:any, data:any) {
    this.http
      .put(
        'https://app-drone-da32e-default-rtdb.asia-southeast1.firebasedatabase.app/' + type + '.json',
        data
      )
      .subscribe(response => {
        this.message.success("Lưu thành công, load lại page để kiểm tra")
        console.log(response);
      });
  }

  fetchRecipes(type:any, data:any) {
    return this.http
      .get(
        'https://app-drone-da32e-default-rtdb.asia-southeast1.firebasedatabase.app/' + type + '.json'
      )
    //   .pipe(
    //     map((recipes:any) => recipes[type])
    .subscribe((value:any) => {
        data.next(value);
        console.log(value)}
    )
  }

  fetchData(type:any) {
    return this.http
      .get(
        'https://app-drone-da32e-default-rtdb.asia-southeast1.firebasedatabase.app/' + type + '.json'
      )
    //   .pipe(
    //     map((recipes:any) => recipes[type])
  }

  loadData() {

    const request = [];
    request.push(this.fetchRecipes('menu', this.menu));
    request.push(this.fetchRecipes('new', this.new));
    request.push(this.fetchRecipes('ct', this.ct));
    request.push(this.fetchRecipes('intro', this.intro));

    const data = forkJoin(request).toPromise();
    return new Promise<void>((resolve, reject) => {
        data.then((data:any) => {
            this.menu = data[0].menu;
            this.new = data[1].new;
            this.new = data[2].ct;
            this.new = data[2].intro;
        }, err => {
            console.log(err)
        });
    })
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
    this.menu.complete();
    this.ct.complete();
    this.project.complete();
    this.menu.complete();
    this.intro.complete();
    this.new.complete();
    this.menuChange.complete();
    this._unsubscriber$.complete();
    this.changeMenuVisible.complete();
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

  visible = false;

  changeVisible(){
    this.changeMenuVisible.next(this.visible)
  }

  open(): void {
    this.visible = true;
    this.changeMenuVisible.next(this.visible)
  }

  close(): void {
    this.visible = false;
    this.changeMenuVisible.next(this.visible)
  }
}
