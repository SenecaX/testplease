import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseTabsComponent } from './please-tabs.component';

describe('PleaseTabsComponent', () => {
  let component: PleaseTabsComponent;
  let fixture: ComponentFixture<PleaseTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
