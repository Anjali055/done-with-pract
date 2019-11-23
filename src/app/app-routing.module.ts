import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { LibraryComponent } from './library/library.component';
import { CustomerComponent } from './customer/customer.component';
import { FacultyComponent } from './faculty/faculty.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthactgaurdGuard } from './authactgaurd.guard';
import { GaurdCanDeacitveGuard } from './gaurd-can-deacitve.guard';


const routes: Routes = [
  {path:'abc1',component:StudentComponent},
  {path:'abc2',component:TeacherComponent,canActivate:[AuthactgaurdGuard]},
  {path:'abc3',component:LibraryComponent,canDeactivate:[GaurdCanDeacitveGuard]},
  {path:'abc4',component:CustomerComponent},
  {path:'abc5',component:FacultyComponent},
  {path:'abc6',component:RegistrationComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
