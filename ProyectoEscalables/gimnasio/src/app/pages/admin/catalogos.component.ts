import { Component } from '@angular/core';

@Component({
  selector: 'app-catalogos',
  standalone: true,
  template: `
    <div class="page-head"><h1>Catálogos</h1></div>

    <div class="tabs" role="tablist">
      @for (c of catalogos; track c.nombre; let i = $index) {
        <button role="tab" [class.on]="activo === i" (click)="activo = i">{{ c.nombre }}</button>
      }
    </div>

    <div class="card" style="margin-bottom:1.25rem">
      <div class="row" style="align-items:end">
        <div class="field" style="margin:0;flex:1;min-width:220px">
          <label for="nuevo">Nuevo elemento en «{{ catalogos[activo].nombre }}»</label>
          <input id="nuevo">
        </div>
        <button class="btn btn-primary" type="button">Agregar</button>
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <thead><tr><th>Nombre</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          @for (e of catalogos[activo].items; track e) {
            <tr>
              <td>{{ e }}</td>
              <td><span class="badge ok">Activo</span></td>
              <td class="actions">
                <button class="btn btn-sm" type="button">Editar</button>
                <button class="btn btn-sm btn-danger" type="button">Eliminar</button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class CatalogosComponent {
  activo = 0;
  catalogos = [
    { nombre: 'Tipos de clase', items: ['Fuerza', 'Cardio', 'Movilidad', 'Funcional'] },
    { nombre: 'Niveles', items: ['Principiante', 'Intermedio', 'Avanzado', 'Todos'] },
    { nombre: 'Estados de membresía', items: ['Activa', 'Por vencer', 'Vencida', 'Cancelada'] },
    { nombre: 'Estados de pago', items: ['Pagado', 'Pendiente', 'Rechazado'] },
    { nombre: 'Métodos de pago', items: ['Efectivo', 'Tarjeta', 'Transferencia'] },
  ];
}
