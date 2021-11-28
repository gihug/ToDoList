import { Utils } from './../../services/utils/utils';
import { Constant } from './../../services/constant/constant';
import { Task } from './../../services/interface/interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-task',
  templateUrl: './form-task.component.html',
  styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent implements OnInit {
  @Input('task') task: Task = {
    id: 0,
    checked: false,
    title: '',
    description: '',
    date: Constant.CURRENT_DATE,
    piority: 'Normal',
  };
  @Input('isUpdate') isUpdate = false;
  @Output('clickSubmit') clickSubmit = new EventEmitter();

  currentDate = Constant.CURRENT_DATE;
  constructor() {}

  ngOnInit(): void {}
  dataLocal = [];
  onSubmit() {
    if (this.isUpdate) {
      this.dataLocal = Utils.getListToDo();
      let indexValueUpdate = this.dataLocal.findIndex(
        (value) => value.id === this.task.id
      );
      this.dataLocal[indexValueUpdate] = this.task;
      Utils.setListToDo(this.dataLocal);
    } else {
      this.clickSubmit.emit(this.task);
      this.task = {
        id: 0,
        checked: false,
        title: '',
        description: '',
        date: Constant.CURRENT_DATE,
        piority: 'Normal',
      };
    }
  }
}
