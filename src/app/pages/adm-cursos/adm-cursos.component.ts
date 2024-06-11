import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-adm-cursos',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <p>
      adm-cursos works!
      <router-outlet></router-outlet>
    </p>
  `,
  styles: ``
})
export class AdmCursosComponent {

}
