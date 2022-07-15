import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PleaseSidenavComponent } from './please-sidenav.component';

describe('PleaseSidenavComponent', () => {
  let component: PleaseSidenavComponent;
  let fixture: ComponentFixture<PleaseSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PleaseSidenavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PleaseSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
