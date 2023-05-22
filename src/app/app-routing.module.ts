import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AhomeComponent} from "./adminSide/components/ahome/ahome.component";
import {LoginComponent} from "./login/login.component";
import {CategorieComponent} from "./adminSide/components/categorie/categorie.component";
import {UhomeComponent} from "./userSide/uhome/uhome.component";
import {AllUsersComponent} from "./adminSide/components/all-users/all-users.component";
import {UserPassedExamsComponent} from "./adminSide/components/user-passed-exams/user-passed-exams.component";
import {EditFormUserComponent} from "./adminSide/components/edit-form-user/edit-form-user.component";
import {AllQuestionComponent} from "./adminSide/components/all-question/all-question.component";
import {AddQuestionComponent} from "./adminSide/components/add-question/add-question.component";
import {MessagesComponent} from "./adminSide/components/messages/messages.component";
import {EditQComponent} from "./adminSide/components/edit-q/edit-q.component";
import {DashboardComponent} from "./adminSide/components/dashboard/dashboard.component";
import {ProfileComponent} from "./userSide/profile/profile.component";
import {InformationComponent} from "./userSide/information/information.component";
import {StartComponent} from "./userSide/start/start.component";
import {RegistreComponent} from "./userSide/registre/registre.component";
import {ConfirmdeComponent} from "./confirmde/confirmde.component";
import {TestComponent} from "./userSide/test/test.component";
import {ResultComponent} from "./userSide/result/result.component";
import {MsgComponent} from "./adminSide/components/msg/msg.component";
import {UsermsgComponent} from "./userSide/usermsg/usermsg.component";
import {CatquesComponent} from "./adminSide/components/catques/catques.component";
import {AccueilComponent} from "./accueil/accueil.component";
import { AboutComponent } from './about/about.component';
import { PresenceComponent } from './adminSide/components/presence/presence.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'acc',
    pathMatch: 'full'
  },
  { path: 'home', component: AhomeComponent ,
    children:[
      { path: 'categ', component: CategorieComponent },
      { path: 'alluser', component: AllUsersComponent },
      { path: 'userpassed', component: UserPassedExamsComponent },
      { path: 'userEdit/:id', component: EditFormUserComponent },
      { path: 'allQ', component: AllQuestionComponent },
      { path: 'addQ', component: AddQuestionComponent },
      { path: 'msg', component: MessagesComponent },
      { path: 'editQ/:id', component: EditQComponent },
      { path: 'Dashboard', component: DashboardComponent },
      { path: 'msg/:id', component: MsgComponent },
      { path: 'quest/:id', component: CatquesComponent },
      { path: 'res/:id', component: PresenceComponent },



    ]

  },
  { path: 'userhome', component: UhomeComponent ,
    children:[
      { path: 'da', component: ProfileComponent },
      { path: 'inform', component: InformationComponent },
      { path: 'start', component: StartComponent },
      { path: 'test', component: TestComponent },
      { path: 'res/:id', component: ResultComponent },
      { path: 'usermsg', component: UsermsgComponent },

    ]

  },
  { path: 'login', component: LoginComponent },
  { path: 'registre', component: RegistreComponent },
  { path: 'confirm/:id', component: ConfirmdeComponent },
  { path: 'acc', component: AccueilComponent },
  { path: 'about', component: AboutComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
