// import { Injectable } from '@angular/core';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
// import * as firebase from 'firebase/app';
// import { Task } from '../tasks/task';

// @Injectable({
//   providedIn: 'root'
// })

// export class TaskService {
//   tasksRef: AngularFireList<any>;      // Reference to users list, Its an Observable
//   taskRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too
//   _db:AngularFirestore;
 
//   constructor(private db: AngularFireDatabase) { }   // Inject AngularFireDatabase dependency in constructor


//   // Create User
//   AddTask(task: Task) {
//     this.tasksRef.push({
//       title: task.title
//     })
//   }

//   // Read User
//   GetTask(id: string) {
//     this.taskRef = this.db.object('tasks-list/' + id);
//     return this.taskRef;
//   }

//   // Read Users List
//   GetTasksList() {
//     this.tasksRef = this.db.list('tasks-list');
//     return this.tasksRef;
//   }  

//   // Update User
//   UpdateTask(task: Task) {
//     this.taskRef.update({
//       title: task.title
//     })
//   }  

//   // Delete User
//   DeleteTask(id: string) { 
//     this.taskRef = this.db.object('tasks-list/'+id);
//     this.taskRef.remove();
//   }
  
// }