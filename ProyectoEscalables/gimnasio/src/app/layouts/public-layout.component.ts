import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="nav">
      <div class="container nav-inner">
        <a class="logo" routerLink="/">GYM nombre pendiente<span>.</span></a>
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
          <a routerLink="/planes" routerLinkActive="active">Planes</a>
          <a routerLink="/clases" routerLinkActive="active">Clases</a>
          <a routerLink="/entrenadores" routerLinkActive="active">Entrenadores</a>
        </nav>
        <div class="row">
          <a class="btn btn-sm" routerLink="/login">Iniciar sesión</a>
          <a class="btn btn-sm btn-primary" routerLink="/registro">Crear cuenta</a>
        </div>
      </div>
    </header>

    <main><router-outlet /></main>

    <footer class="footer">
      <div class="container row between">
        <span class="row">
          <!-- Atajos temporales solo para poder el diseño -->
          <a routerLink="/cuenta">Vista de usuario</a>
          <a routerLink="/admin">Vista de administrador</a>
        </span>
      </div>
    </footer>
  `,
})
export class PublicLayoutComponent {}
