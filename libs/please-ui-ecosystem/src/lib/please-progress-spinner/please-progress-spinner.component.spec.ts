import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseProgressSpinnerComponent } from './please-progress-spinner.component';

describe('PleaseProgressSpinnerComponent', () => {
  let component: PleaseProgressSpinnerComponent;
  let fixture: ComponentFixture<PleaseProgressSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseProgressSpinnerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseProgressSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
