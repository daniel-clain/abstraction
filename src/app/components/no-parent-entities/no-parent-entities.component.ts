import { Component, OnInit } from '@angular/core';
import { Entity } from '../../models/entity';
import { EntityService } from '../../entity.service';
import { ViewService } from '../../view.service';

@Component({
  selector: 'no-parent-entities',
  templateUrl: './no-parent-entities.component.html',
  styleUrls: ['./no-parent-entities.component.sass']
})
export class NoParentEntitiesComponent implements OnInit {
  
  no_parent_entities: Entity[];
  selected_entity: Entity;
  
  constructor(private _entityService: EntityService, private _viewService: ViewService) { }
  
  ngOnInit() {
    this._entityService.entity_observable.subscribe((entities: Entity[]) => {
      this.no_parent_entities = this._entityService.getNoParentEntities(entities);
    });
  }
  
  entitySelected(entity: Entity){
    this.selected_entity = entity;
    this._viewService.setView('stage')
    this._entityService.setFeatureEntityById(entity.id);
  }
  
  

}
