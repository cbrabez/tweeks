import { Component, NgModule } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
// var firebaseui = require('firebaseui');
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task   } from './tasks/task';

  // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());

// ui.start('#firebaseui-auth-container', {
//   signInOptions: [
//     firebase.auth.EmailAuthProvider.PROVIDER_ID
//   ],
//   // Other config options...
// });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@NgModule({
  imports: [
  ],
  declarations: [
  ]
})

export class AppComponent {
  taskName: string;
  faTimes = faTimes;
  db:AngularFirestore;


tasks: Observable<any[]>;
constructor(db: AngularFirestore) {
    this.tasks = db.collection('tasks').valueChanges();
    this.db = db; 
  }
  

  addTask(title: string, day: number){
    let tasksCollection = this.db.collection<Task>('tasks');
    tasksCollection.add({ title: title, day: day });
    this.clearTaskInput;
  }

  deleteTask(task){
    let tasksCollection = this.db.collection<Task>('tasks');
    
    // var docRef = this.db.collection("tasks").doc("nBTFkWwB8R0Gek805Lme");
    // let currentTask = this.db.collection('tasks').ref.where("title", "==", task.title).get().then(function(querySnapshot){
    //   querySnapshot.forEach(function(doc){return doc}
    // }
    tasksCollection.ref.where("title", "==", task.title).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          tasksCollection.doc(doc.id).delete();
      });
    })
  }

  clearTaskInput(){
    this.taskName = '';
  }

  };
