import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavItem } from '../../models/nav-item';
import { EntityService } from '../../entity.service';
import { Entity } from '../../models/entity';
import { ViewService } from '../../view.service';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.sass']
})

export class MainNavComponent implements OnInit {
  
  
  no_parent_entities: Entity[] = [];
  
  mainNavItems: NavItem[] = [
    {
      displayName: 'Quick Entry',
      viewName: 'quick_entry'
    },
    {
      displayName: 'Main Stage',
      viewName: 'stage'
    },
    {
      displayName: 'All To-Dos',
      viewName: 'todos'
    },
    {
      displayName: 'Focus Entities',
      viewName: 'focus_entities'
    },
    {
      displayName: 'No Parent Entities',
      viewName: 'no_parent_entities'
    }
  ]
  
  
  constructor(private _entityService: EntityService, private _viewService: ViewService) { }
  
  ngOnInit() {
    this._entityService.entity_observable.subscribe((entities: Entity[]) => {
      this.setItemCount('focus_entities', this._entityService.getFocusEntities(entities).length)
      this.setItemCount('no_parent_entities', this._entityService.getNoParentEntities(entities).length)
    });
  }
  navItemSelected(item){
    this._viewService.setView(item.viewName);
  }
  
  setItemCount(viewName: string, count: number){
    this.mainNavItems.find(item => item.viewName === viewName).count = count;
  }
  
  
  
}
