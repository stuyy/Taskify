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
        opacity: 0
      })),
      state('show', style({
        visibility: 'visible',
        opacity: 1
      })),
      transition('hidden <=> show', [
        animate('0.2s ease-in')
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
      progress: this.progressRange
    }
    console.log(newTask);
    this.tasks.push(newTask);
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
    this.progressRange=parseInt($event);
    console.log(this.progressRange);
  }
}
