import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'testplease-please-select',
  templateUrl: './please-select.component.html',
  styleUrls: ['./please-select.component.scss'],
})
export class PleaseSelectComponent implements OnInit {
  toppings = new FormControl('');

  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  constructor() {}

  ngOnInit(): void {}
}
