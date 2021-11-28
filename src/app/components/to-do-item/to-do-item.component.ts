import { Task } from './../../services/interface/interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input('data') data: Task;
  @Output('clickCheckbox') clickCheckbox = new EventEmitter();
  @Output('clickRemove') clickRemove = new EventEmitter();
  isDetail = false;

  constructor() {}

  ngOnInit(): void {}

  onClickCheckbox() {
    this.clickCheckbox.emit(this.data);
  }

  onClickRemove() {
    this.clickRemove.emit(this.data);
  }
}
