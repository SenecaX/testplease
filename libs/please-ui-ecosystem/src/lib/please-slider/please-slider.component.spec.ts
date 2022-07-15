import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSliderComponent } from './please-slider.component';

describe('PleaseSliderComponent', () => {
  let component: PleaseSliderComponent;
  let fixture: ComponentFixture<PleaseSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseSliderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
