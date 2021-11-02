import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnylineComponent} from "./anyline/anyline.component";

const routes: Routes = [
  {path: 'anyline', component: AnylineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
