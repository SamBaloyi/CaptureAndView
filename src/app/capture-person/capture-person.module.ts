import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { CapturePersonRoutingModule } from './capture-person-routing.module';
import { CapturePersonComponent } from './capture-person.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CapturePersonComponent],
  imports: [
    CommonModule,
    CapturePersonRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class CapturePersonModule { }
