import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcom',
    loadChildren: () => import('./welcom/welcom.module').then(m => m.WelcomModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then(m => m.CreateModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
