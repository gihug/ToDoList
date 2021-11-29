import { Utils } from './../../services/utils/utils';
import { Constant } from './../../services/constant/constant';
import { Task } from './../../services/interface/interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoComponent implements OnInit {
  constructor() {}

  listToDo: Task[] = [];
  dataLocal;
  id;
  isHasChecked = false;
  ngOnInit(): void {
    this.dataLocal = Utils.getListToDo();
    this.id = Utils.getIDCreate();
    if (this.dataLocal) {
      this.listToDo = this.dataLocal;
    }
  }

  clickSubmit(event) {
    console.log(event);
    this.id++;
    let value = {
      id: this.id,
      checked: false,
      title: event.title,
      date: event.date,
      description: event.description,
      piority: event.piority,
    };
    this.listToDo.push(value);
    this.sortList();
    Utils.setListToDo(this.listToDo);
    Utils.setIDCreate(this.id);
  }

  clickCheckbox(event) {
    this.isHasChecked = event.checked ? true : false;
  }

  clickRemoveBulk() {
    this.isHasChecked = false;
    this.listToDo = this.listToDo.filter((value) => {
      return value.checked == false;
    });
    Utils.setListToDo(this.listToDo);
  }

  onSearchData(event) {
    this.dataLocal = Utils.getListToDo();
    const filterValue = event.toLowerCase();
    this.listToDo = this.dataLocal.filter((value) => {
      return value.title.toLowerCase().includes(filterValue);
    });
  }

  clickRemove(event) {
    let indexValueRemove = this.listToDo.findIndex(
      (value) => value.id === event.id
    );
    this.listToDo.splice(indexValueRemove, 1);
    Utils.setListToDo(this.listToDo);
  }

  sortList() {
    this.listToDo.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }
}
