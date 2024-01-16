import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-feature-b',
  templateUrl: './feature-b.component.html',
  styleUrls: ['./feature-b.component.scss']
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
}
