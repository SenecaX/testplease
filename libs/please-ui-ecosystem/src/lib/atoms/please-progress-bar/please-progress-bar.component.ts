import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'testplease-please-progress-bar',
  templateUrl: './please-progress-bar.component.html',
  styleUrls: ['./please-progress-bar.component.scss'],
})
export class PleaseProgressBarComponent implements OnInit {
  ngOnInit(): void {
    console.log('progress bar');
  }
}
