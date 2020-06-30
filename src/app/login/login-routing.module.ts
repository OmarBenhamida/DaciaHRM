import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '', component: LoginComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: WelcomeComponent },
            { path: 'auth', component: AuthComponent },
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
