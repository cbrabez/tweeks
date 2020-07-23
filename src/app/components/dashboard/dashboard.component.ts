import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

import { AngularFirestore } from 'angularfire2/firestore';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Task   } from '../../tasks/task';
import { User } from '../../shared/services/user';
import { TopMenuComponent } from '../navigation/top-menu/top-menu.component';
import { SideMenuComponent } from '../navigation/side-menu/side-menu.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

@NgModule({
  imports: [],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})

export class DashboardComponent implements OnInit {
  taskName: string;
  faTimes = faTimes;
  faSignOutAlt = faSignOutAlt;
  db:AngularFirestore;
  tasks: Observable<any[]>;

  constructor(
    public authService: AuthService,
    public router: Router,
    public ngZone: NgZone,
    db: AngularFirestore
  ) { 
    this.tasks = db.collection('tasks').valueChanges();
  this.db = db; 
}

  ngOnInit() { }

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

}
