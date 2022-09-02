import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmdeComponent } from './confirmde.component';

describe('ConfirmdeComponent', () => {
  let component: ConfirmdeComponent;
  let fixture: ComponentFixture<ConfirmdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmdeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
