import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout.component';
import { CuentaLayoutComponent } from './layouts/cuenta-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout.component';
import { HomeComponent } from './pages/publico/home.component';
import { PlanesComponent } from './pages/publico/planes.component';
import { ClasesComponent } from './pages/publico/clases.component';
import { EntrenadoresComponent } from './pages/publico/entrenadores.component';
import { LoginComponent } from './pages/publico/login.component';
import { RegistroComponent } from './pages/publico/registro.component';
import { PerfilComponent } from './pages/cuenta/perfil.component';
import { MembresiaComponent } from './pages/cuenta/membresia.component';
import { InscripcionesComponent } from './pages/cuenta/inscripciones.component';
import { PagosComponent } from './pages/cuenta/pagos.component';
import { DashboardComponent } from './pages/admin/dashboard.component';
import { AdminTablaComponent } from './pages/admin/admin-tabla.component';
import { CatalogosComponent } from './pages/admin/catalogos.component';
import { ConfiguracionComponent } from './pages/admin/configuracion.component';
import { ADMIN_CONFIG } from './pages/admin/admin-data';

export const routes: Routes = [
  {
    path: '', component: PublicLayoutComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'planes', component: PlanesComponent },
      { path: 'clases', component: ClasesComponent },
      { path: 'entrenadores', component: EntrenadoresComponent },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
    ],
  },
  {
    path: 'cuenta', component: CuentaLayoutComponent, children: [
      { path: '', redirectTo: 'perfil', pathMatch: 'full' },
      { path: 'perfil', component: PerfilComponent },
      { path: 'membresia', component: MembresiaComponent },
      { path: 'inscripciones', component: InscripcionesComponent },
      { path: 'pagos', component: PagosComponent },
    ],
  },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: '', component: DashboardComponent },
      { path: 'usuarios', component: AdminTablaComponent, data: ADMIN_CONFIG['usuarios'] },
      { path: 'planes', component: AdminTablaComponent, data: ADMIN_CONFIG['planes'] },
      { path: 'membresias', component: AdminTablaComponent, data: ADMIN_CONFIG['membresias'] },
      { path: 'entrenadores', component: AdminTablaComponent, data: ADMIN_CONFIG['entrenadores'] },
      { path: 'clases', component: AdminTablaComponent, data: ADMIN_CONFIG['clases'] },
      { path: 'inscripciones', component: AdminTablaComponent, data: ADMIN_CONFIG['inscripciones'] },
      { path: 'pagos', component: AdminTablaComponent, data: ADMIN_CONFIG['pagos'] },
      { path: 'catalogos', component: CatalogosComponent },
      { path: 'configuracion', component: ConfiguracionComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];
