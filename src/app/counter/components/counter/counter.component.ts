import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>{{ counter }}</h3>
    <button (click)="increase(1)">+1</button>
    <button (click)="decrease(1)">-1</button>
    <button (click)="resetCounter()">Reset</button>`,
})
export class CounterComponent {
  public counter: number = 0;

  increase(value: number): void {
    this.counter += value;
  }

  decrease(value: number): void {
    this.counter -= value;
  }

  resetCounter() {
    this.counter = 0;
  }
}
