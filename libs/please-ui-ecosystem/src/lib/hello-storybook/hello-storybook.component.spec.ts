import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloStorybookComponent } from './hello-storybook.component';

describe('HelloStorybookComponent', () => {
  let component: HelloStorybookComponent;
  let fixture: ComponentFixture<HelloStorybookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloStorybookComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HelloStorybookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
