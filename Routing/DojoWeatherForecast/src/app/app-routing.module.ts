import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { WashingtonDCComponentComponent } from './washington-dccomponent/washington-dccomponent.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/seattle', pathMatch: 'full'
  },

  {
    path: 'seattle', component: SeattleComponentComponent
    // children: []
  },

  {
    path: 'burbank', component: BurbankComponentComponent
  },

  {
    path: 'chicago', component: ChicagoComponentComponent
  },

  {
    path: 'dallas', component: DallasComponentComponent
  },

  {
    path: 'sanjose', component: SanJoseComponentComponent
  },

  {
    path: 'washingtondc', component: WashingtonDCComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
