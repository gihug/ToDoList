import { Constant } from './../../services/constant/constant';
import { Task } from './../../services/interface/interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  constructor() {}

  listToDo: Task[] = [];
  dataLocal;
  ngOnInit(): void {
    this.dataLocal = localStorage.getItem('listToDo');
    if (this.dataLocal) {
      this.listToDo = this.dataLocal;
    }
  }

  clickSubmit(event) {
    console.log(event);
    let value = {
      title: event.title,
      date: event.date,
      description: event.description,
      piority: event.piority,
    };
    this.listToDo.push(value);
    // this.dataLocal.push(event);
    // this.setItemLocal(this.dataLocal);
    console.log(this.listToDo);
  }

  setItemLocal(value) {
    localStorage.setItem('listToDo', value);
  }
}
