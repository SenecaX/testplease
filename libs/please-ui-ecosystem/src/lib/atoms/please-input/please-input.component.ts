import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'testplease-please-input',
  templateUrl: './please-input.component.html',
  styleUrls: ['./please-input.component.scss'],
})
export class PleaseInputComponent {
  @Input() placeholder!: string;
  // @Input() controlName!: string;
  // @Input('controlName') formControlName!: string;
}
