import { Component, Input, signal, ViewChild } from "@angular/core";

import { DoubleCounterComponent } from "./double-counter/double-counter.component";

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss'],
  standalone: true,
  imports: [DoubleCounterComponent]
})
export class FeatureBComponent {
  // Proprietà private
  private _privateValue = 0;

  // Proprietà di vista figlia
  @ViewChild('childElement') childElement: any;

  // Proprietà pubbliche
  @Input() public inputValue = '';
  public outputValue = '';

  label = 'LLLLLLL';

  counter = signal(0);
  actions = signal<string[]>([]);

  // Metodi privati
  private _privateMethod(): void {
    // Logica del metodo privato
    this._privateValue = 3;
    this.doSomething();
  }

  constructor() {
    console.log(this.label);
  }

  // Altri metodi pubblici
  public doSomething(): void {
    // Logica del metodo
    this.outputValue = 'test2';
    this._privateMethod();
  }

  decrement() {
    this.counter.update((oldCount) => oldCount - 1);
    //this.counter.set(this.counter()+1)
    this.actions.update((oldActions) => [...oldActions, 'INCREMENT']);
  }

  increment() {
    this.counter.update((oldCount) => oldCount + 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
