import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KylsloginComponent } from './kylslogin/kylslogin.component';
import { RegistrationComponent} from './registration/registration.component';
import {AboutComponent} from './about/about.component'
import {McatComponent} from './mcat/mcat.component';
import {EcatComponent} from './ecat/ecat.component';
import {BcatComponent} from './bcat/bcat.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {UniversitiesComponent} from './universities/universities.component';
import {TeachersComponent} from './teachers/teachers.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {DashboardmainComponent} from './dashboardmain/dashboardmain.component';
import {AdminpanelComponent} from './adminpanel/adminpanel.component';
import {TeachermainComponent} from './teachermain/teachermain.component';
import {AddteacherComponent} from './addteacher/addteacher.component'
import {StudentrecordComponent} from './studentrecord/studentrecord.component';
import {TeacherrecordComponent} from './teacherrecord/teacherrecord.component';
import {McatSubjectComponent } from './mcat-subject/mcat-subject.component'
import {EcatSubjectComponent } from './ecat-subject/ecat-subject.component'
import {BcatSubjectComponent } from './bcat-subject/bcat-subject.component'
import {ProgramofferedComponent} from './Programoffered/programoffered.component'
import {SubjectComponent} from './subject/subject.component'

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'about' , component:AboutComponent},
  {path: 'MCAT-Subjects' ,component: McatSubjectComponent },
  {path: 'BCAT-Subjects' ,component: BcatSubjectComponent },
  {path: 'ECAT-Subjects' ,component: EcatSubjectComponent },
  {path: 'Subject/:id' , component: SubjectComponent},
  {path: 'BCAT' , component: BcatComponent},
  {path: 'Feedback' , component: FeedbackComponent},
  {path: 'Teachers' , component: TeachersComponent},
  {path: 'Universities' , component: UniversitiesComponent},
  {path: 'program-offered' , component:ProgramofferedComponent},
  {path: 'adminpanel' , component:KylsloginComponent},
  {path: 'MCAT' , component: McatComponent},
  {path: 'ECAT' , component: EcatComponent},
  {path: 'Signup' , component: SignupComponent},
  {path: 'Signin' , component: SigninComponent},
  {path: 'adminpanel/registration' , component: RegistrationComponent},
  {path: 'Admin' , component: AdminpanelComponent},

  {path: 'Dashboard' , component: DashboardmainComponent,

    children:[
      {path: '' , component: StudentrecordComponent},


      {path: 'Teachers' , component: TeachermainComponent,
      
      children:[
        {path: '' , component: TeacherrecordComponent},
        {path: 'Teacher-registration' , component: AddteacherComponent},
      ]
    
    },

    ]

},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
