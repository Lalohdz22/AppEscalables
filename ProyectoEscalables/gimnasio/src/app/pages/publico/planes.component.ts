import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PLANES } from '../../data';

@Component({
  selector: 'app-planes',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container section">
      <h1>Planes</h1>
      <p class="muted">Todos los planes incluyen acceso a vestidores y evaluación inicial.</p>
      <div class="grid grid-3">
        @for (p of planes; track p.nombre) {
          <article class="card plan" [class.destacado]="p.destacado">
            @if (p.destacado) { <span class="badge">El más elegido</span> }
            <h3>{{ p.nombre }}</h3>
            <div class="precio">\${{ p.precio }} <small>/ {{ p.periodo }}</small></div>
            <ul>
              @for (b of p.beneficios; track b) { <li>{{ b }}</li> }
            </ul>
            <a class="btn" [class.btn-primary]="p.destacado" routerLink="/registro">Elegir {{ p.nombre }}</a>
          </article>
        }
      </div>
    </section>
  `,
})
export class PlanesComponent {
  planes = PLANES;
}
