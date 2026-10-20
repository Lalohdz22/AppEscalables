import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="container auth">
      <div class="card" style="width:min(620px,100%)">
        <h2>Crear cuenta</h2>
        <p class="muted">Con tu cuenta puedes elegir un plan e inscribirte a clases.</p>
        <div class="form-grid">
          <div class="field"><label for="nombre">Nombre</label><input id="nombre"></div>
          <div class="field"><label for="apellidos">Apellidos</label><input id="apellidos"></div>
          <div class="field"><label for="correo">Correo electrónico</label><input id="correo" type="email"></div>
          <div class="field"><label for="tel">Teléfono</label><input id="tel" type="tel"></div>
          <div class="field"><label for="nac">Fecha de nacimiento</label><input id="nac" type="date"></div>
          <div class="field"><label for="plan">Plan de interés</label>
            <select id="plan"><option>Básico</option><option>Plus</option><option>Anual</option></select>
          </div>
          <div class="field"><label for="pass">Contraseña</label><input id="pass" type="password"></div>
          <div class="field"><label for="pass2">Confirmar contraseña</label><input id="pass2" type="password"></div>
        </div>
        <button class="btn btn-primary" type="button">Crear cuenta</button>
        <p class="muted" style="margin:1rem 0 0">¿Ya tienes cuenta? <a routerLink="/login">Iniciar sesión</a></p>
      </div>
    </section>
  `,
})
export class RegistroComponent {}
