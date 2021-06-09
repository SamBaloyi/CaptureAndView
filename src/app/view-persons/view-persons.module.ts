import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table'
import { ViewPersonsRoutingModule } from './view-persons-routing.module';
import { ViewPersonsComponent } from './view-persons.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [ViewPersonsComponent],
  imports: [
    CommonModule,
    ViewPersonsRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ViewPersonsModule { }
