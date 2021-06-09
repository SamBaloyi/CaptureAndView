import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'view', loadChildren: () => import('./view-persons/view-persons.module').then(m => m.ViewPersonsModule) },
  { path: 'capture', loadChildren: () => import('./capture-person/capture-person.module').then(m => m.CapturePersonModule) },
  { path: 'landing', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
