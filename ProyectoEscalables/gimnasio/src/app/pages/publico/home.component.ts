import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CLASES, PLANES } from '../../data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container hero">
      <div>
        <h1>Slogan pendiente</h1>
        <p class="muted">Elige un plan, reserva tu lugar en las clases y lleva el control de tu membresía desde un solo lugar.</p>
        <div class="row">
          <a class="btn btn-primary" routerLink="/registro">Crear cuenta</a>
          <a class="btn" routerLink="/planes">Ver planes</a>
        </div>
      </div>

      <aside class="board" aria-label="Clases de hoy">
        <h3>Clases de hoy</h3>
        @for (c of hoy; track c.id) {
          <div class="board-row">
            <span class="hora">{{ c.hora }}</span>
            <div>{{ c.nombre }}<small>{{ c.entrenador }}</small></div>
            <span class="cupos" [class.lleno]="c.cupo === c.inscritos">
              {{ c.cupo === c.inscritos ? 'Sin lugares' : (c.cupo - c.inscritos) + ' lugares' }}
            </span>
          </div>
        }
      </aside>
    </section>

    <section class="container section">
      <h2>Sobre el gimnasio</h2>
      <div class="grid grid-3">
        <div class="card"><h3>Horario</h3><p class="muted">Lunes a viernes de 6:00 a 22:00. Sábados de 8:00 a 14:00.</p></div>
        <div class="card"><h3>Instalaciones</h3><p class="muted">Sala de pesas, zona de cardio, salón de clases y vestidores con casilleros.</p></div>
        <div class="card"><h3>Ubicación</h3><p class="muted">Av. Universidad 120, San Luis Potosí, S.L.P.</p></div>
      </div>
    </section>

    <section class="container section" style="padding-top:0">
      <div class="row between" style="margin-bottom:1.5rem">
        <h2 style="margin:0">Planes</h2>
        <a class="btn btn-sm" routerLink="/planes">Comparar planes</a>
      </div>
      <div class="grid grid-3">
        @for (p of planes; track p.nombre) {
          <div class="card plan" [class.destacado]="p.destacado">
            <h3>{{ p.nombre }}</h3>
            <div class="precio">\${{ p.precio }} <small>/ {{ p.periodo }}</small></div>
          </div>
        }
      </div>
    </section>
  `,
})
export class HomeComponent {
  hoy = CLASES.slice(0, 4);
  planes = PLANES;
}
