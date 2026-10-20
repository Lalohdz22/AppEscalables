import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { AdminConfig } from './admin-data';

// Pantalla genérica de listado + formulario. La configuración llega por route.data.
@Component({
  selector: 'app-admin-tabla',
  standalone: true,
  template: `
    @if (cfg(); as c) {
      <div class="page-head">
        <h1>{{ c.titulo }}</h1>
        <button class="btn btn-primary" type="button" (click)="panel = !panel">{{ panel ? 'Cerrar formulario' : c.nuevo }}</button>
      </div>

      @if (panel) {
        <div class="card" style="margin-bottom:1.25rem">
          <h3>{{ c.nuevo }}</h3>
          <div class="form-grid">
            @for (f of c.campos; track f.label) {
              <div class="field">
                <label>{{ f.label }}</label>
                @if (f.tipo === 'select') {
                  <select>@for (o of f.opciones; track o) { <option>{{ o }}</option> }</select>
                } @else {
                  <input [type]="f.tipo">
                }
              </div>
            }
          </div>
          <div class="row">
            <button class="btn btn-primary" type="button">Guardar</button>
            <button class="btn" type="button" (click)="panel = false">Cancelar</button>
          </div>
        </div>
      }

      <div class="filtros"><input type="search" [placeholder]="c.buscar" [attr.aria-label]="c.buscar"></div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              @for (col of c.columnas; track col.key) { <th>{{ col.label }}</th> }
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            @for (fila of c.filas; track $index) {
              <tr>
                @for (col of c.columnas; track col.key) {
                  <td>
                    @if (col.key === 'estado') {
                      <span class="badge" [class]="'badge ' + tono(fila[col.key])">{{ fila[col.key] }}</span>
                    } @else { {{ fila[col.key] }} }
                  </td>
                }
                <td class="actions">
                  <button class="btn btn-sm" type="button">Editar</button>
                  <button class="btn btn-sm btn-danger" type="button">Eliminar</button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    }
  `,
})
export class AdminTablaComponent {
  cfg = toSignal(inject(ActivatedRoute).data as any) as () => AdminConfig | undefined;
  panel = false;

  tono(v: string): string {
    if (['Activo', 'Activa', 'Pagado', 'Inscrito', 'Asistió'].includes(v)) return 'ok';
    if (['Pendiente', 'Por vencer'].includes(v)) return 'warn';
    if (['Inactivo', 'Vencida', 'Cancelada', 'Rechazado'].includes(v)) return 'bad';
    return '';
  }
}
