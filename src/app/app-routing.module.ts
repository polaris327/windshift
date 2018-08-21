import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: './pages/home-page/home-page.module#HomePageModule'},
  {path: '', loadChildren: './pages/home-page/home-page.module#HomePageModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
