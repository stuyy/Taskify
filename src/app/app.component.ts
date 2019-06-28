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
        opacity: 0
      })),
      state('show', style({
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
}
