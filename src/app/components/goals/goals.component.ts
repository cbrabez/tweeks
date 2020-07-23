import { Component, OnInit, NgZone, NgModule } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { TopMenuComponent } from '../navigation/top-menu/top-menu.component';

import { AngularFirestore } from 'angularfire2/firestore';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Goal } from './goal';
import { SideMenuComponent } from '../navigation/side-menu/side-menu.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})

@NgModule({
  imports: [],
  declarations: [
    TopMenuComponent,
    SideMenuComponent
  ]
})

export class GoalsComponent implements OnInit {
  goalName: string;
  faTimes = faTimes;
  faSignOutAlt = faSignOutAlt;
  db:AngularFirestore;
  goals: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    
    this.goals = db.collection('goals').valueChanges();
    this.db = db; 
  }

  ngOnInit() {
  }

  addGoal(title: string){
    let tasksCollection = this.db.collection<Goal>('goals');
    tasksCollection.add({ title: title, description:"" });
    // this.clearTaskInput;
  }

  saveDescription(goal, description: string){
    let tasksCollection = this.db.collection<Goal>('goals');
    tasksCollection.ref.where("title", "==", goal.title).get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
          // console.log(doc.id, " => ", doc.data());
          tasksCollection.doc(doc.id).set({
            title: goal.title,
            description: description
          });
      });
    })
  }

}
