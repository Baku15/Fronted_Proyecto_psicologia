import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TerapeutasComponent } from './terapeutas/terapeutas.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { HorariosComponent } from './horarios/horarios.component';
import { PersonComponent } from './person/person.component';
import { CareerDepartmentComponent } from './career-department/career-department.component';
import { PatientTypeComponent } from './patient-type/patient-type.component';
export const routes: Routes = [
    { path: 'navbar', component: NavbarComponent},
    {path: 'welcome-page', component: WelcomePageComponent},
    {path: 'terapeutas', component: TerapeutasComponent},
    {path: 'pacientes', component: PacientesComponent},
    {path: 'horarios', component: HorariosComponent},
     {path: 'person', component: PersonComponent},
  {path: 'login', component: LoginComponent},
  {path: 'career-department', component: CareerDepartmentComponent},
  {path: 'patient-type', component: PatientTypeComponent},





];
