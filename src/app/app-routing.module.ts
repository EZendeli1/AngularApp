import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponentComponent}from './students-component/students-component.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const routes: Routes = [

  {path:'students',component:StudentsComponentComponent},
  {path:'detail/jmbag',component:StudentDetailComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
