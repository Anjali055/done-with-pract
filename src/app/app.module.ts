import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import{HttpClientModule}from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactivFormsComponent } from './reactiv-forms/reactiv-forms.component';
import { FormbuilderComponent } from './formBuilder/formBuilder.component';
import { templateFormComponent } from './templateForm/templateForm.component';
import { RegistrationComponent } from './registration/registration.component';
import { CustomerComponent } from './customer/customer.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LibraryComponent } from './library/library.component';
import { FacultyComponent } from './faculty/faculty.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NaukriformsComponent } from './naukriforms/naukriforms.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactivFormsComponent,
    FormbuilderComponent,
    templateFormComponent,
    RegistrationComponent,
    CustomerComponent,
    TeacherComponent,
    StudentComponent,
    CollegeComponent,
    LibraryComponent,
    FacultyComponent,
    NavbarComponent,
    NaukriformsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
