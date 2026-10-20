import { Component } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  template: `
    <div class="page-head"><h1>Información general</h1></div>
    <div class="card">
      <p class="muted">Estos datos se muestran en la página de inicio.</p>
      <div class="form-grid">
        <div class="field"><label for="g1">Nombre del gimnasio</label><input id="g1" value="Forja Gym"></div>
        <div class="field"><label for="g2">Teléfono</label><input id="g2" value="444 555 6677"></div>
        <div class="field"><label for="g3">Correo de contacto</label><input id="g3" value="contacto@forja.mx"></div>
        <div class="field"><label for="g4">Dirección</label><input id="g4" value="Av. Universidad 120, San Luis Potosí"></div>
        <div class="field"><label for="g5">Horario entre semana</label><input id="g5" value="6:00 a 22:00"></div>
        <div class="field"><label for="g6">Horario sábado</label><input id="g6" value="8:00 a 14:00"></div>
      </div>
      <div class="field"><label for="g7">Descripción</label><textarea id="g7" rows="4">Gimnasio con sala de pesas, zona de cardio y clases grupales para todos los niveles.</textarea></div>
      <button class="btn btn-primary" type="button">Guardar cambios</button>
    </div>
  `,
})
export class ConfiguracionComponent {}
