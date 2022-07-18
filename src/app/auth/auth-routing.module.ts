import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NbLoginComponent } from '@nebular/auth';

export const routes: Routes = [
  {
    path: '',
    component:NbLoginComponent
  },
  {
    path: 'login',
    component:NbLoginComponent
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
