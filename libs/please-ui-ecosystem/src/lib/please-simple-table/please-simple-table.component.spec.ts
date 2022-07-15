import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSimpleTableComponent } from './please-simple-table.component';

describe('PleaseSimpleTableComponent', () => {
  let component: PleaseSimpleTableComponent;
  let fixture: ComponentFixture<PleaseSimpleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseSimpleTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseSimpleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
