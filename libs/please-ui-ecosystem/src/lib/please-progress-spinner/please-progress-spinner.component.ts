import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testplease-please-progress-spinner',
  templateUrl: './please-progress-spinner.component.html',
  styleUrls: ['./please-progress-spinner.component.scss'],
})
export class PleaseProgressSpinnerComponent implements OnInit {
  ngOnInit(): void {
    console.log('spinner');
  }
}
