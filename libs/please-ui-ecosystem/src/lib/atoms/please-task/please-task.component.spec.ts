import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseTaskComponent } from './please-task.component';

describe('PleaseTaskComponent', () => {
  let component: PleaseTaskComponent;
  let fixture: ComponentFixture<PleaseTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseTaskComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
