import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-head"><h1>Resumen</h1></div>

    <div class="grid grid-4">
      @for (s of stats; track s.label) {
        <div class="card">
          <div class="stat">{{ s.valor }}</div>
          <div class="muted">{{ s.label }}</div>
        </div>
      }
    </div>

    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); margin-top:1.25rem">
      <section class="card">
        <div class="row between"><h3>Ocupación de hoy</h3><a class="btn btn-sm" routerLink="clases">Ver clases</a></div>
        @for (c of ocupacion; track c.nombre) {
          <div style="margin-bottom:1rem">
            <div class="row between"><span>{{ c.hora }} · {{ c.nombre }}</span><small class="muted">{{ c.inscritos }} / {{ c.cupo }}</small></div>
            <div class="barra"><i [style.width.%]="(c.inscritos / c.cupo) * 100"></i></div>
          </div>
        }
      </section>

      <section class="card">
        <div class="row between"><h3>Membresías por vencer</h3><a class="btn btn-sm" routerLink="membresias">Ver todas</a></div>
        @for (m of porVencer; track m.usuario) {
          <div class="row between" style="padding:.6rem 0;border-top:1px solid var(--line)">
            <span>{{ m.usuario }}<small class="muted" style="display:block">Plan {{ m.plan }}</small></span>
            <span class="badge warn">{{ m.dias }} días</span>
          </div>
        }
      </section>
    </div>
  `,
})
export class DashboardComponent {
  stats = [
    { valor: '248', label: 'Socios activos' },
    { valor: '17', label: 'Membresías por vencer' },
    { valor: '$84,350', label: 'Ingresos del mes' },
    { valor: '6', label: 'Clases hoy' },
  ];
  ocupacion = [
    { hora: '07:00', nombre: 'Fuerza total', inscritos: 14, cupo: 20 },
    { hora: '18:30', nombre: 'Spinning', inscritos: 15, cupo: 15 },
    { hora: '19:00', nombre: 'HIIT 45', inscritos: 12, cupo: 16 },
  ];
  porVencer = [
    { usuario: 'Marco Díaz', plan: 'Plus', dias: 5 },
    { usuario: 'Lucía Torres', plan: 'Básico', dias: 3 },
    { usuario: 'Pablo Ruiz', plan: 'Plus', dias: 2 },
  ];
}
