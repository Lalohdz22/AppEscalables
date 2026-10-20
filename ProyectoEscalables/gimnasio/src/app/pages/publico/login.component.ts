import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container auth">
      <div class="card">
        <h2>Iniciar sesión</h2>
        <p class="muted">Entra para ver tu membresía y reservar clases.</p>
        <div class="field"><label for="correo">Correo electrónico</label><input id="correo" type="email" placeholder="tucorreo@ejemplo.com"></div>
        <div class="field"><label for="pass">Contraseña</label><input id="pass" type="password"></div>
        <button class="btn btn-primary" style="width:100%" type="button">Iniciar sesión</button>
        <p class="muted" style="margin:1rem 0 0">¿Aún no tienes cuenta? <a routerLink="/registro">Crear cuenta</a></p>
      </div>
    </section>
  `,
})
export class LoginComponent {}
