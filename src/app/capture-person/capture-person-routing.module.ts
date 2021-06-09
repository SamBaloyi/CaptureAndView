import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CapturePersonComponent } from './capture-person.component';

const routes: Routes = [{ path: '', component: CapturePersonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapturePersonRoutingModule { }
