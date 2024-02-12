import { Component, effect, input } from "@angular/core";

@Component({
  selector: 'app-double-counter',
  standalone: true,
  imports: [],
  templateUrl: './double-counter.component.html',
  styleUrl: './double-counter.component.scss'
})
export class DoubleCounterComponent {

  inputValue = input(0, {
    transform: (val: number) => val * 2
  })

  constructor() {
    effect(() => console.log(`Effect new value from inputValue ${this.inputValue()}`))
  }

}
