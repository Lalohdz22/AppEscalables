import { Component } from '@angular/core';

@Component({
  selector: 'app-inscripciones',
  standalone: true,
  template: `
    <div class="page-head"><h1>Mis clases</h1></div>

    <div class="tabs" role="tablist">
      <button role="tab" [class.on]="tab === 'proximas'" (click)="tab = 'proximas'">Próximas</button>
      <button role="tab" [class.on]="tab === 'historial'" (click)="tab = 'historial'">Historial</button>
    </div>

    @if (tab === 'proximas') {
      <div class="table-wrap">
        <table>
          <thead><tr><th>Clase</th><th>Día</th><th>Hora</th><th>Entrenador</th><th>Estado</th><th></th></tr></thead>
          <tbody>
            @for (i of proximas; track i.clase + i.dia) {
              <tr>
                <td>{{ i.clase }}</td><td>{{ i.dia }}</td><td>{{ i.hora }}</td><td>{{ i.entrenador }}</td>
                <td><span class="badge ok">Inscrito</span></td>
                <td><button class="btn btn-danger btn-sm" type="button">Cancelar</button></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    } @else {
      <div class="table-wrap">
        <table>
          <thead><tr><th>Clase</th><th>Fecha</th><th>Entrenador</th><th>Estado</th></tr></thead>
          <tbody>
            @for (h of historial; track h.fecha + h.clase) {
              <tr>
                <td>{{ h.clase }}</td><td>{{ h.fecha }}</td><td>{{ h.entrenador }}</td>
                <td><span class="badge" [class.ok]="h.estado === 'Asistió'" [class.bad]="h.estado === 'Cancelada'">{{ h.estado }}</span></td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
})
export class InscripcionesComponent {
  tab: 'proximas' | 'historial' = 'proximas';
  proximas = [
    { clase: 'HIIT 45', dia: 'Miércoles', hora: '19:00', entrenador: 'Luis Barrera' },
    { clase: 'Fuerza total', dia: 'Jueves', hora: '07:00', entrenador: 'Mariana Ortiz' },
  ];
  historial = [
    { clase: 'Spinning', fecha: '12 oct 2026', entrenador: 'Carlos Medina', estado: 'Asistió' },
    { clase: 'Yoga restaurativo', fecha: '06 oct 2026', entrenador: 'Ana Rivas', estado: 'Cancelada' },
    { clase: 'Fuerza total', fecha: '02 oct 2026', entrenador: 'Mariana Ortiz', estado: 'Asistió' },
  ];
}
