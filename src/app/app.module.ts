import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// Material Angular Imports
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider'
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { AuthService } from "./shared/services/auth.service";
import { AppRoutingModule } from './shared/routing/app-routing.module';
import { environment } from '../environments/environment';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoalsComponent } from './components/goals/goals.component';
import { CurrentWeekComponent } from './components/current-week/current-week.component';
import { NextWeekComponent } from './components/next-week/next-week.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TopMenuComponent } from './components/navigation/top-menu/top-menu.component';
import { SideMenuComponent } from './components/navigation/side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
    declarations: [
        AppComponent,
        SignInComponent,
        SignUpComponent,
        ForgotPasswordComponent,
        VerifyEmailComponent,
        DashboardComponent,
        GoalsComponent,
        CurrentWeekComponent,
        NextWeekComponent,
        OverviewComponent,
        TopMenuComponent,
        SideMenuComponent
        // TaskListComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'tweeks'),
        AngularFirestoreModule, 
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AppRoutingModule,
        FontAwesomeModule,
        BrowserAnimationsModule,
        MatListModule,
        MatDividerModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule { }