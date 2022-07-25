import { ThemeModule } from './../../@theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UsersRoutingModule } from './user-routing.module';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [UserComponent,AddEditUserComponent, UserListComponent],
  imports: [
    CommonModule,
    ThemeModule,
    UsersRoutingModule
  ]
})
export class UserModule { }
