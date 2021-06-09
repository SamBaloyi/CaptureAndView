import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

import { ViewPersonsComponent } from './view-persons.component';

const routes: Routes = [
  { path: '', component: ViewPersonsComponent },
{path: '/landing', component: LandingComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewPersonsRoutingModule { }
