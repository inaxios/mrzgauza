import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddUserComponent} from "./add-user/add-user.component";
import {MrzComponent} from "./mrz/mrz.component";

const routes: Routes = [
  {path: 'list-users', redirectTo: '/', pathMatch: 'full'},
  {path: 'add-user', component: AddUserComponent},
  {path: 'mrz', component: MrzComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
