import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowStudentComponent } from './show-student/show-student.component';

const routes: Routes = [
  {
    path: '',
    component: ShowStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
