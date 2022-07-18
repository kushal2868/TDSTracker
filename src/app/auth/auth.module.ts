import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { NbToastrModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [LoginComponent,AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ThemeModule,
    NbToastrModule.forRoot(),
  ]
})
export class AuthModule { }
