import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseTreeComponent } from './please-tree.component';

describe('PleaseTreeComponent', () => {
  let component: PleaseTreeComponent;
  let fixture: ComponentFixture<PleaseTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseTreeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
