import { Routes,RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'registro-usuario', component: NavbarComponent},
{ path: 'login', component: LoginComponent},


];
