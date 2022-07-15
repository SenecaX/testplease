import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSnackbarComponent } from './please-snackbar.component';

describe('PleaseSnackbarComponent', () => {
  let component: PleaseSnackbarComponent;
  let fixture: ComponentFixture<PleaseSnackbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseSnackbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
