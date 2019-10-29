import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListService } from './todo-service/todo-service.service';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    TodoItemComponent,
    TodoListComponent,
    NewTodoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  //exports: [
  //  DashboardComponent,
  //  PageNotFoundComponent
  //],
  providers: [
    TodoListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
