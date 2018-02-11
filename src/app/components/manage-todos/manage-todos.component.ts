import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem, Difficulty, Priority } from '../../models/to-do-item';

@Component({
  selector: 'manage-todos',
  templateUrl: './manage-todos.component.html',
  styleUrls: ['./manage-todos.component.sass']
})
export class ManageTodosComponent implements OnInit {
  @Input() todo_items: ToDoItem[] = [];
  @Input() parent_entity_id: string;
  @Output() todosUpdated = new EventEmitter();
  feature_todo: ToDoItem;
  difficulty_list = Object.keys(Difficulty);
  priority_list = Object.keys(Priority);
  
  constructor() { }

  ngOnInit() {
    if(this.todo_items === undefined){
      this.todo_items = [];
    }
    this.feature_todo = {parent_entity_id: this.parent_entity_id}
  }
  
  resetTodo(){
    this.feature_todo = {
      parent_entity_id: this.parent_entity_id,
      details: ''
    }
  }
  
  updateFeatureTodo(feature_todo){
    if(!feature_todo.details){
      alert('Your To-Do Item must have details');
      return
    }
    
    if(!this.feature_todo.due_date) {
      feature_todo.date_created = new Date();
      this.todo_items.push(feature_todo);
    } else {
      this.todo_items.forEach((item, index) => {
        if(item.date_created === feature_todo.date_created){
          this.todo_items[index] = feature_todo;
        }
      })
    }
    this.todosUpdated.emit();
    this.resetTodo();
  }
  
  editTodo(item: ToDoItem){
    this.feature_todo = item;
  }
  
  deleteToDoItem(item_for_delete: ToDoItem){
    this.todo_items.forEach((item, index) => {
      if(item.date_created === item_for_delete.date_created){
        this.todo_items.splice(index, 1);
        this.todosUpdated.emit();
      }
    })
    
  }

}
