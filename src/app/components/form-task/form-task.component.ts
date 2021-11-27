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

  onSubmit() {
    this.clickSubmit.emit(this.task);
  }
}
