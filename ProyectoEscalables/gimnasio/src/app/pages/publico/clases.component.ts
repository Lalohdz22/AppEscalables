import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLASES } from '../../data';

@Component({
  selector: 'app-clases',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container section">
      <h1>Clases</h1>
      <p class="muted">Consulta horarios, nivel y lugares disponibles. Para inscribirte necesitas una cuenta con membresía activa.</p>

      <div class="filtros">
        <select aria-label="Tipo de clase"><option>Todos los tipos</option><option>Fuerza</option><option>Cardio</option><option>Movilidad</option><option>Funcional</option></select>
        <select aria-label="Nivel"><option>Todos los niveles</option><option>Principiante</option><option>Intermedio</option><option>Avanzado</option></select>
        <select aria-label="Día"><option>Toda la semana</option><option>Lunes</option><option>Martes</option><option>Miércoles</option><option>Jueves</option><option>Viernes</option></select>
      </div>

      <div class="grid grid-3">
        @for (c of clases; track c.id) {
          <article class="card">
            <div class="row between">
              <span class="badge">{{ c.tipo }}</span>
              <span class="muted">{{ c.nivel }}</span>
            </div>
            <h3 style="margin-top:.75rem">{{ c.nombre }}</h3>
            <p class="muted" style="margin-bottom:.5rem">{{ c.dia }} · {{ c.hora }} · {{ c.entrenador }}</p>
            <div class="barra" role="img" [attr.aria-label]="c.inscritos + ' de ' + c.cupo + ' lugares ocupados'">
              <i [style.width.%]="(c.inscritos / c.cupo) * 100"></i>
            </div>
            <div class="row between" style="margin-top:.5rem">
              <small class="muted">{{ c.inscritos }} de {{ c.cupo }} lugares</small>
              <a class="btn btn-sm" [class.btn-primary]="c.inscritos < c.cupo" routerLink="/login">
                {{ c.inscritos < c.cupo ? 'Inscribirme' : 'Lista de espera' }}
              </a>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ClasesComponent {
  clases = CLASES;
}
