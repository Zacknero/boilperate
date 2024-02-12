import { Component } from '@angular/core';
import { HighLightDirective } from "../../shared/directives/high-light.directive";

@Component({
  standalone: true,
  imports: [HighLightDirective],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
