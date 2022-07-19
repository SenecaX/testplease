import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseProgressBarComponent } from './please-progress-bar.component';

describe('PleaseProgressBarComponent', () => {
  let component: PleaseProgressBarComponent;
  let fixture: ComponentFixture<PleaseProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseProgressBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
