import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroudComponent } from './backgroud.component';

describe('BackgroudComponent', () => {
  let component: BackgroudComponent;
  let fixture: ComponentFixture<BackgroudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackgroudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
