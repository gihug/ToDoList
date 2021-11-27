import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToDoItemComponent } from './components/to-do-item/to-do-item.component';
import { FormTaskComponent } from './components/form-task/form-task.component';

@NgModule({
  declarations: [AppComponent, ToDoItemComponent, FormTaskComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
