import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addSup() {
    console.log('ding');
  }

  removeSup() {

  }

  addSub() {

  }

  removeSub() {

  }

  newNote() {

  }


  newTask() {

  }


}
