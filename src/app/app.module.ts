import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AhomeComponent } from './adminSide/components/ahome/ahome.component';
import { SideBarComponent } from './adminSide/components/side-bar/side-bar.component';
import { LoginComponent } from './login/login.component';
import { CategorieComponent } from './adminSide/components/categorie/categorie.component';
import { UhomeComponent } from './userSide/uhome/uhome.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { CatPipe } from './pipes/cat.pipe';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AllUsersComponent } from './adminSide/components/all-users/all-users.component';
import { UserPassedExamsComponent } from './adminSide/components/user-passed-exams/user-passed-exams.component';
import { UserComponent } from './adminSide/components/user/user.component';
import { EditFormUserComponent } from './adminSide/components/edit-form-user/edit-form-user.component';
import { UserPipe } from './pipes/user.pipe';
import { AllQuestionComponent } from './adminSide/components/all-question/all-question.component';
import { AddQuestionComponent } from './adminSide/components/add-question/add-question.component';
import { MessagesComponent } from './adminSide/components/messages/messages.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import { QuestionPipe } from './pipes/question.pipe';
import { EditQComponent } from './adminSide/components/edit-q/edit-q.component';
import { DashboardComponent } from './adminSide/components/dashboard/dashboard.component';
import { ProfileComponent } from './userSide/profile/profile.component';
import { InformationComponent } from './userSide/information/information.component';
import { StartComponent } from './userSide/start/start.component';
import { RegistreComponent } from './userSide/registre/registre.component';
import { ConfirmdeComponent } from './confirmde/confirmde.component';
import { TestComponent } from './userSide/test/test.component';
import { QuestComponent } from './userSide/quest/quest.component';
import { ResultComponent } from './userSide/result/result.component';
import { ListUserComponent } from './adminSide/components/list-user/list-user.component';
import { MsgComponent } from './adminSide/components/msg/msg.component';
import { UsermsgComponent } from './userSide/usermsg/usermsg.component';
import { CatquesComponent } from './adminSide/components/catques/catques.component';
import { ResultPipe } from './pipes/result.pipe';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { PresenceComponent } from './adminSide/components/presence/presence.component';


@NgModule({
  declarations: [
    AppComponent,
    AhomeComponent,
    SideBarComponent,
    LoginComponent,
    CategorieComponent,
    UhomeComponent,
    CatPipe,
    AllUsersComponent,
    UserPassedExamsComponent,
    UserComponent,
    EditFormUserComponent,
    UserPipe,
    AllQuestionComponent,
    AddQuestionComponent,
    MessagesComponent,
    QuestionPipe,
    EditQComponent,
    DashboardComponent,
    ProfileComponent,
    InformationComponent,
    StartComponent,
    RegistreComponent,
    ConfirmdeComponent,
    TestComponent,
    QuestComponent,
    ResultComponent,
    ListUserComponent,
    MsgComponent,
    UsermsgComponent,
    CatquesComponent,
    ResultPipe,
    AccueilComponent,
      HeaderComponent,
      FooterComponent,
      AboutComponent,
      PresenceComponent
   ],
    imports: [
        FormsModule,
        HttpClientModule,
        BrowserModule,

      AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatCheckboxModule,


    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
