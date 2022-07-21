import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FmdLoginComponent } from './screens/fmd-login/fmd-login.component';
import { HomeComponent } from './screens/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: FmdLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
