import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseButtonComponent } from './please-button.component';

describe('PleaseButtonComponent', () => {
  let component: PleaseButtonComponent;
  let fixture: ComponentFixture<PleaseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
