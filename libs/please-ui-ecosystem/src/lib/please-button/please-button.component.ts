import { Component, Input } from '@angular/core';

@Component({
  selector: 'testplease-please-button',
  templateUrl: './please-button.component.html',
  styleUrls: ['./please-button.component.scss'],
})
export class PleaseButtonComponent {
  @Input() color: 'primary' | 'accent' | 'warn' | undefined;
  @Input() text: string | undefined;

  constructor() {
    console.log('enters', this);
  }
}
