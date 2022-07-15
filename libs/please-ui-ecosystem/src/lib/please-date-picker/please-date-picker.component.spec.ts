import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseDatePickerComponent } from './please-date-picker.component';

describe('PleaseDatePickerComponent', () => {
  let component: PleaseDatePickerComponent;
  let fixture: ComponentFixture<PleaseDatePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseDatePickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
