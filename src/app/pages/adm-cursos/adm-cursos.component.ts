import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-adm-cursos',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class AdmCursosComponent {

}
