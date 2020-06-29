import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
// import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
    declarations: [
        AppComponent
        // TaskListComponent
    ],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase, 'tweeks'),
        AngularFirestoreModule, 
        AngularFireDatabaseModule,
        FontAwesomeModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }