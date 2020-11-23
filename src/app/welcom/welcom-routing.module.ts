import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomComponent } from './welcom/welcom.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomRoutingModule { }
