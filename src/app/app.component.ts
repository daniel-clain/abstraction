import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavItem } from './models/nav-item';
import { EntityService } from './entity.service';
import { ViewService } from './view.service';


@Component({
  selector: 'root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  
  view: string;
  
  constructor(private _viewService: ViewService) { }
  
  ngOnInit() {
    this._viewService.view_subject.subscribe(view =>this.view = view);
    this._viewService.setView('stage')
  }
  changeView(navItem: NavItem){
    this.view = navItem.viewName;
  }
  
  
}
