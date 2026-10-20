import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  standalone: true,
  template: `
    <div class="page-head"><h1>Mi perfil</h1></div>
    <div class="card">
      <div class="form-grid">
        <div class="field"><label for="n">Nombre</label><input id="n" value="Eduardo"></div>
        <div class="field"><label for="a">Apellidos</label><input id="a" value="Hernández López"></div>
        <div class="field"><label for="c">Correo electrónico</label><input id="c" type="email" value="eduardo@ejemplo.com"></div>
        <div class="field"><label for="t">Teléfono</label><input id="t" type="tel" value="444 123 4567"></div>
        <div class="field"><label for="f">Fecha de nacimiento</label><input id="f" type="date"></div>
        <div class="field"><label for="e">Contacto de emergencia</label><input id="e" placeholder="Nombre y teléfono"></div>
      </div>
      <button class="btn btn-primary" type="button">Guardar cambios</button>
    </div>

    <div class="card" style="margin-top:1.25rem">
      <h3>Cambiar contraseña</h3>
      <div class="form-grid">
        <div class="field"><label for="p1">Contraseña actual</label><input id="p1" type="password"></div>
        <div class="field"><label for="p2">Nueva contraseña</label><input id="p2" type="password"></div>
      </div>
      <button class="btn" type="button">Actualizar contraseña</button>
    </div>
  `,
})
export class PerfilComponent {}
