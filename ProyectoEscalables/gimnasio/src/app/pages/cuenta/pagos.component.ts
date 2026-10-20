import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos',
  standalone: true,
  template: `
    <div class="page-head"><h1>Mis pagos</h1></div>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Folio</th><th>Fecha</th><th>Concepto</th><th>Método</th><th>Monto</th><th>Estado</th></tr></thead>
        <tbody>
          @for (p of pagos; track p.folio) {
            <tr>
              <td>{{ p.folio }}</td><td>{{ p.fecha }}</td><td>{{ p.concepto }}</td><td>{{ p.metodo }}</td><td>\${{ p.monto }}</td>
              <td><span class="badge" [class.ok]="p.estado === 'Pagado'" [class.warn]="p.estado === 'Pendiente'">{{ p.estado }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
})
export class PagosComponent {
  pagos = [
    { folio: 'P-0142', fecha: '01 oct 2026', concepto: 'Plan Plus · octubre', metodo: 'Tarjeta', monto: 599, estado: 'Pagado' },
    { folio: 'P-0118', fecha: '01 sep 2026', concepto: 'Plan Plus · septiembre', metodo: 'Efectivo', monto: 599, estado: 'Pagado' },
    { folio: 'P-0097', fecha: '01 ago 2026', concepto: 'Plan Básico · agosto', metodo: 'Transferencia', monto: 399, estado: 'Pagado' },
  ];
}
