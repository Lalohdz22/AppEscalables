import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-membresia',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="page-head"><h1>Mi membresía</h1></div>
    <div class="card">
      <div class="row between">
        <div>
          <h3 style="margin:0">Plan Plus</h3>
          <span class="muted">Acceso completo todo el día · 3 clases por semana</span>
        </div>
        <span class="badge ok">Activa</span>
      </div>
      <hr style="border:0;border-top:1px solid var(--line);margin:1.25rem 0">
      <div class="grid grid-3">
        <div><small class="muted">Inicio</small><div><strong>01 oct 2026</strong></div></div>
        <div><small class="muted">Vence</small><div><strong>31 oct 2026</strong></div></div>
        <div><small class="muted">Días restantes</small><div class="stat">12</div></div>
      </div>
      <div class="barra" style="margin:1.25rem 0" role="img" aria-label="60% del periodo transcurrido"><i style="width:60%"></i></div>
      <div class="row">
        <button class="btn btn-primary" type="button">Renovar membresía</button>
        <a class="btn" routerLink="/planes">Cambiar de plan</a>
      </div>
    </div>
  `,
})
export class MembresiaComponent {}
