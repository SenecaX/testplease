import { Component, Input } from '@angular/core';

@Component({
  selector: 'testplease-please-button',
  templateUrl: './please-button.component.html',
  styleUrls: ['./please-button.component.scss'],
})
export class PleaseButtonComponent {
  @Input() color: string | undefined;
  @Input() text: string | undefined;

  constructor() {
    this.color = 'primary';
  }
}
