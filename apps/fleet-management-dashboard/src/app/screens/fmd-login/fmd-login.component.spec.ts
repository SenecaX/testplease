import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmdLoginComponent } from './fmd-login.component';

describe('FmdLoginComponent', () => {
  let component: FmdLoginComponent;
  let fixture: ComponentFixture<FmdLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FmdLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FmdLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
