import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { KylsloginComponent } from './kylslogin/kylslogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
//import { ProgramofferedComponent } from './programoffered/programoffered.component';
import { McatComponent } from './mcat/mcat.component';
import { EcatComponent } from './ecat/ecat.component';
import { BcatComponent } from './bcat/bcat.component';
import { TeachersComponent } from './teachers/teachers.component';
import { UniversitiesComponent } from './universities/universities.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { StudentrecordComponent } from './studentrecord/studentrecord.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TeachermainComponent } from './teachermain/teachermain.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { TeacherrecordComponent } from './teacherrecord/teacherrecord.component';
import { EcatSubjectComponent } from './ecat-subject/ecat-subject.component';
import { McatSubjectComponent } from './mcat-subject/mcat-subject.component';
import { BcatSubjectComponent } from './bcat-subject/bcat-subject.component';
import { SubjectComponent } from './subject/subject.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    KylsloginComponent,
    RegistrationComponent,
    AboutComponent,
    //ProgramofferedComponent,
    McatComponent,
    EcatComponent,
    BcatComponent,
    TeachersComponent,
    UniversitiesComponent,
    FeedbackComponent,
    SignupComponent,
    SigninComponent,
    AdminpanelComponent,
    DashboardmainComponent,
    StudentrecordComponent,
    DashboardComponent,
    TeachermainComponent,
    AddteacherComponent,
    TeacherrecordComponent,
    EcatSubjectComponent,
    McatSubjectComponent,
    BcatSubjectComponent,
    SubjectComponent,
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
