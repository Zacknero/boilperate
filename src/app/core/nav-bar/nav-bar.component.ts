import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  template: `
    <button routerLink="home">Home</button>
    <button routerLink="home/feature-a">Feature A</button>
    <button routerLink="home/feature-b">Feature B</button>
    <button routerLink="admin">Admin</button>
    <button routerLink="home/test">Test</button>
  `,
  styles: [''],
})
export class NavBarComponent {}
