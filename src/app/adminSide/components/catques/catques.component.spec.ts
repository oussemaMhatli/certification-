import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatquesComponent } from './catques.component';

describe('CatquesComponent', () => {
  let component: CatquesComponent;
  let fixture: ComponentFixture<CatquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatquesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
