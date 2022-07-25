import { UserListComponent } from './user-list/user-list.component';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';

const routes: Routes = [{
  path: '',
  component: UserComponent,
  children: [
    {
      path: '',
      component: UserListComponent,
    },
    {
      path: 'list',
      component: UserListComponent,
    },
    {
      path: 'add',
      component: AddEditUserComponent,
    },
    {
      path: 'edit/:id',
      component: AddEditUserComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {
}
