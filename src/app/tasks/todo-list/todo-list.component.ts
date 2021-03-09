import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { TasksService } from "../../shared/tasks.service";
import { Task } from "../task.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    // this.tasks = 
    this.getTasks()
    
    this.tasksNext = this.getTasksNextLevel()
    // console.log(this.tasksNext)
  }

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

 tasks; 
 tasksNext;

  getTasks(){
    // return this.tasksService.getTasksFromFirebase()
    this.tasksService.getTasksFromFirebase().subscribe( res => {
      this.tasks = res;
    });
  }

  getTasksNextLevel(){
    // let mondayTasks = ["MAAAD"]
    // console.log(this.tasks)
    // for (let i = 0; i < this.tasks.length; i++) {
    //   console.log(this.tasks[i]);
    // };
    // console.log("TASKS FOR MONDAY   " + mondayTasks)
    // return mondayTasks;
    return this.tasksService.getTasksFromFirebase()
  }

  deleteTask(id) {
    this.tasksService.deleteTaskInFirebase(id);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event.container.data)
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
