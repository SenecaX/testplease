import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseCardComponent } from './please-card.component';

describe('PleaseCardComponent', () => {
  let component: PleaseCardComponent;
  let fixture: ComponentFixture<PleaseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
