import { Task } from './../../services/interface/interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css'],
})
export class ToDoItemComponent implements OnInit {
  @Input('data') data: Task;
  isDetail = false;
  isBulk = false;

  constructor() {}

  ngOnInit(): void {}
}
