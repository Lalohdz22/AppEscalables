import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cuenta-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="nav">
      <div class="container nav-inner">
        <a class="logo" routerLink="/">FORJA<span>.</span></a>
        <nav class="nav-links">
          <a routerLink="/planes">Planes</a>
          <a routerLink="/clases">Clases</a>
          <a routerLink="/entrenadores">Entrenadores</a>
        </nav>
        <div class="row">
          <span class="muted">Eduardo H.</span>
          <a class="btn btn-sm" routerLink="/">Cerrar sesión</a>
        </div>
      </div>
    </header>

    <div class="container side-shell">
      <nav class="side" aria-label="Mi cuenta">
        <a routerLink="perfil" routerLinkActive="active">Mi perfil</a>
        <a routerLink="membresia" routerLinkActive="active">Mi membresía</a>
        <a routerLink="inscripciones" routerLinkActive="active">Mis clases</a>
        <a routerLink="pagos" routerLinkActive="active">Mis pagos</a>
      </nav>
      <main><router-outlet /></main>
    </div>
  `,
})
export class CuentaLayoutComponent {}
