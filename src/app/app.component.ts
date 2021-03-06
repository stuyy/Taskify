import { Component } from '@angular/core';
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('newTask', [
      state('hidden', style({
        visibility: 'hidden',
        opacity: 0,
        height: 0
      })),
      state('show', style({
        visibility: 'visible',
        opacity: 1,
        height: '250px'
      })),
      transition('hidden <=> show', [
        animate('0.3s ease-in-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'TaskAppNg';
  buttonTaskTitle='New Task';
  taskTitle = '';
  taskDescription = '';
  show = false;
  tasks = []
  error =  [];
  progressRange =  0;
  public isCollapsed = true;
  editTaskFlag=false;
  private cancelIcon = `<i class="far fa-window-close"></i>`;
  private newTaskIcon = `<i class="fas fa-plus-square"></i>`
  constructor(config: NgbProgressbarConfig)
  {
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
  ngOnInit()
  {
    this.tasks = JSON.parse(localStorage.tasksAdded);
    this.tasks.forEach(el => {
      el.isCollapsed = true;
    })
  }
  newTask()
  {
    this.show = !this.show;
    if(this.show)
      this.buttonTaskTitle='Cancel';
    else
    {
      this.buttonTaskTitle='New Task'
      this.taskTitle = '';
      this.taskDescription = '';
    }
  }
  addTask()
  {
    if(this.taskTitle.length > 50)
    {
      this.error.push("Title cannot exceed 50 characters.");
      return;
    }
    if(this.taskTitle.length === 0)
    {
      this.error.push("Title cannot be blank.");
      return;
    }
    else if(this.taskDescription.length === 0)
    {
      this.error.push("Description cannot be blank.");
      return;
    }
    let newTask = {
      title: this.taskTitle,
      description: this.taskDescription,
      isCollapsed: true,
      progress: this.progressRange,
      editTask: false
    }
    console.log(newTask);
    this.tasks.push(newTask);
    localStorage.tasksAdded = JSON.stringify(this.tasks);
    this.taskTitle = '';
    this.taskDescription = '';
  }
  editTask(taskToEdit)
  {
    console.log(taskToEdit);
    this.tasks[taskToEdit].editTask=true;
  }
  clearAllTasks()
  {
   
  }
  saveEditedTask(taskToEdit)
  {
    this.tasks[taskToEdit].editTask=false;
    localStorage.tasksAdded = JSON.stringify(this.tasks);
  }
  close(alert) {
    this.error.splice(alert, 1);
  }
  reset()
  {
    this.taskTitle  = '';
    this.taskDescription = '';
  }
  setRange($event)
  {
    console.log($event);
    this.progressRange=parseInt($event.value);
    console.log(this.progressRange);
  }
  modifyProgress(taskIndex, value)
  {
    this.tasks[taskIndex].progress = value.value;
    let localTasks = JSON.parse(localStorage.tasksAdded);
    localTasks[taskIndex].progress = value.value;
    localStorage.tasksAdded = JSON.stringify(localTasks);
  }
  clearingTasks($event)
  {
    this.tasks = [];
    localStorage.tasksAdded = [];
  }
  delete(task)
  {
    console.log(task); // Delete task.
    let localTasks = JSON.parse(localStorage.tasksAdded);
    localTasks.splice(task, 1); // Splice the task from  local storage.
    localStorage.tasksAdded = JSON.stringify(localTasks);
    this.tasks.splice(task, 1); // Splice the task from memory.
  }
}
