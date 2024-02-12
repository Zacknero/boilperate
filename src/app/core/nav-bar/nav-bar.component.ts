import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
    standalone: true,
    imports: [RouterLink],
})
export class NavBarComponent {}
