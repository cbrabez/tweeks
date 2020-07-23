import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { AuthService} from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreCollectionGroup, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable'
import { TopMenuComponent } from '../navigation/top-menu/top-menu.component';
import { SideMenuComponent } from '../navigation/side-menu/side-menu.component';
import { Task   } from '../../tasks/task';



import { title } from 'process';
import { stringify } from 'querystring';
import { firestore } from 'firebase';
import * as moment from 'moment';


@Component({
  selector: 'app-current-week',
  templateUrl: './current-week.component.html',
  styleUrls: ['./current-week.component.scss']
})

@NgModule({
  imports: [
  ],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})

export class CurrentWeekComponent implements OnInit {
  db:AngularFirestore;
  tasks: Observable<any[]>;
  tasksForMonday: Array<any>;
  tasksForTuesday: Array<any>;
  tasksForWednesday: Array<any>;
  tasksForThursday: Array<any>;
  tasksForFriday: Array<any>;
  

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    db: AngularFirestore
  ) { 
    
    this.tasks = db.collection('tasks').valueChanges();
    this.db = db; 
    
    // let monday = moment().weekday(-7);

}
  ngOnInit() {
    this.tasksForMonday = this.getTasksForMonday();
    this.tasksForTuesday = this.getTasksForTuesday();
    // console.log(this.tasksForCurrentWeek);
     }

     addTask(title: string, day: number){
      let tasksCollection = this.db.collection<Task>('tasks');
      tasksCollection.add({ title: title, day: day });
    }
     
     
//   getTasksForCurrentWeek(){
//     let today = new Date();
//     let tasksCollection = this.db.collection<Task>('tasks');
//     let taskArray = [];
//     tasksCollection.ref.where("dueDate", ">" , today).get().then(function(querySnapshot){
//       querySnapshot.forEach(function(doc) {
//         //       // doc.data() is never undefined for query doc snapshots
//         let counter = 1; 
//         taskArray.push(doc.data());
//         // console.log(taskArray);
//     });
//   });
//   return taskArray;
// }

getTasksForMonday(){
  // let today = new Date();
  // let monday = today.setDate(this.date.getDate() + 86400); 
  // console.log("Today is " + today + "  Monday is   " + monday)
  let tasksCollection = this.db.collection<Task>('tasks');
  let taskArray = [];
  tasksCollection.ref.where("day", "==" , 1).get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc) {
      //       // doc.data() is never undefined for query doc snapshots
      taskArray.push(doc.data());
      // console.log(taskArray);
  });
});
return taskArray;
}

getTasksForTuesday(){
  // let today = new Date();
  // let monday = today.setDate(this.date.getDate() + 86400); 
  // console.log("Today is " + today + "  Monday is   " + monday)
  let tasksCollection = this.db.collection<Task>('tasks');
  let taskArray = [];
  tasksCollection.ref.where("day", "==" , 2).get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc) {
      //       // doc.data() is never undefined for query doc snapshots

      taskArray.push(doc.data());
      // console.log(taskArray);
  });
});
return taskArray;
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

}

// 7day = 604800 seconds