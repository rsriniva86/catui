import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatmenuComponent } from './catmenu/catmenu.component';

const routes: Routes = [
  {
    path:'cat-menu',
    component:CatmenuComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
