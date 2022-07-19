import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseInputComponent } from './please-input.component';

describe('PleaseInputComponent', () => {
  let component: PleaseInputComponent;
  let fixture: ComponentFixture<PleaseInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
