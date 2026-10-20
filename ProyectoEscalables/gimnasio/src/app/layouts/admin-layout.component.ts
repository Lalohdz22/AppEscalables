import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="nav">
      <div class="container nav-inner">
        <a class="logo" routerLink="/admin">FORJA<span>.</span> <small class="muted" style="font-size:1rem">Administración</small></a>
        <span style="flex:1"></span>
        <a class="btn btn-sm" routerLink="/">Cerrar sesión</a>
      </div>
    </header>

    <div class="container side-shell">
      <nav class="side" aria-label="Administración">
        <a routerLink="/admin" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Resumen</a>
        <span class="sep muted">Personas</span>
        <a routerLink="usuarios" routerLinkActive="active">Usuarios</a>
        <a routerLink="entrenadores" routerLinkActive="active">Entrenadores</a>
        <span class="sep muted">Servicios</span>
        <a routerLink="planes" routerLinkActive="active">Planes</a>
        <a routerLink="membresias" routerLinkActive="active">Membresías</a>
        <a routerLink="clases" routerLinkActive="active">Clases</a>
        <a routerLink="inscripciones" routerLinkActive="active">Inscripciones</a>
        <span class="sep muted">Finanzas</span>
        <a routerLink="pagos" routerLinkActive="active">Pagos</a>
        <span class="sep muted">Sistema</span>
        <a routerLink="catalogos" routerLinkActive="active">Catálogos</a>
        <a routerLink="configuracion" routerLinkActive="active">Información general</a>
      </nav>
      <main><router-outlet /></main>
    </div>
  `,
})
export class AdminLayoutComponent {}
