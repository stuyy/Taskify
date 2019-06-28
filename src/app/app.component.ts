import { Component } from '@angular/core';
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
  public isCollapsed = true;
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
    let newTask = {
      title: this.taskTitle,
      description: this.taskDescription,
      isCollapsed: true
    }
    this.tasks.push(newTask);
  }
}
