import { Component } from '@angular/core';
import { ENTRENADORES } from '../../data';

@Component({
  selector: 'app-entrenadores',
  standalone: true,
  template: `
    <section class="container section">
      <h1>Entrenadores</h1>
      <p class="muted">Conoce al equipo que dirige las clases y diseña las rutinas.</p>
      <div class="grid grid-4">
        @for (e of entrenadores; track e.nombre) {
          <article class="card">
            <div class="avatar" aria-hidden="true">{{ e.nombre.charAt(0) }}</div>
            <h3>{{ e.nombre }}</h3>
            <p class="muted" style="margin:0">{{ e.especialidad }}</p>
            <small class="muted">{{ e.experiencia }} de experiencia</small>
          </article>
        }
      </div>
    </section>
  `,
})
export class EntrenadoresComponent {
  entrenadores = ENTRENADORES;
}
