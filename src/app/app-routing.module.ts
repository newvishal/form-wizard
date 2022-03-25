import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompletePageComponent } from './pages/complete-page/complete-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
const routes: Routes = [
  {
    path: 'form',
    component: FormPageComponent
  },
  {
    path: 'complete',
    component: CompletePageComponent
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
