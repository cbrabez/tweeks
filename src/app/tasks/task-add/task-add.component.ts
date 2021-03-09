import { Component, OnInit, ViewChild } from '@angular/core';
import { Task } from "../task.model";
import { TasksService } from "../../shared/tasks.service";


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.scss']
})
export class TaskAddComponent implements OnInit {
  @ViewChild('title') inputTitle; // accessing the reference element
  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  } 

  newTaskFromForm(event){
    let task: Task = new Task(event.target.value,false, this.getTodayAsString());
    this.tasksService.createTask(task).then(res => {
      this.clearInput();
    })
  }

  clearInput(){
    // clearing the value
  this.inputTitle.nativeElement.value = ' ';
}

  getTodayAsString() {
    let today = new Date();
    let dd: any = today.getDate();
    let mm: any = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return mm + '/' + dd + '/' + yyyy;
}

}
