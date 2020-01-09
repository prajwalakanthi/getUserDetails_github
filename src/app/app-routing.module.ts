import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './componets/user/user.component';
import { UserCardviewComponent } from './componets/user-cardview/user-cardview.component';


const routes: Routes = [
  { path: '', component: UserComponent},
  {path: 'user-card-view', component:UserCardviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
