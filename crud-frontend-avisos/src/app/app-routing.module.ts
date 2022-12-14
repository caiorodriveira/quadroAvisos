import { EditComponent } from './components/edit/edit.component';
import { NewComponent } from './components/new/new.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: HomeComponent
  },
  {
    path: 'new', component: NewComponent
  },
  {
    path: 'edit', component: EditComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
