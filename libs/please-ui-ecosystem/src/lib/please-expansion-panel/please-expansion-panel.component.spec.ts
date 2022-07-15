import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseExpansionPanelComponent } from './please-expansion-panel.component';

describe('PleaseExpansionPanelComponent', () => {
  let component: PleaseExpansionPanelComponent;
  let fixture: ComponentFixture<PleaseExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseExpansionPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
