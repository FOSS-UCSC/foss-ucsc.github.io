import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './views/home/home.component';
import {AlgoHomeComponent} from './views/algo/algo-home/algo-home.component';
import {AlgoContributionComponent} from './views/algo/algo-contribution/algo-contribution.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'algo', component: AlgoHomeComponent},
  {path: 'algo/contribution', component: AlgoContributionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
