import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';
import { AuthComponent } from './auth.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent,
  //     }
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
