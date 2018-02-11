import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../entity.service';
import { Entity } from '../../models/entity';
import { ViewService } from '../../view.service';

@Component({
  selector: 'focus-entities',
  templateUrl: './focus-entities.component.html',
  styleUrls: ['./focus-entities.component.sass']
})
export class FocusEntitiesComponent implements OnInit {
  
  focus_entities: Entity[];
  
  constructor(private _entityService: EntityService, private _viewService: ViewService) { }
  
  ngOnInit() {
    this._entityService.entity_observable.subscribe((entities: Entity[]) => {
      this.focus_entities = this._entityService.getFocusEntities(entities);
    });
  }
  
  entitySelected(entity: Entity){
    this._viewService.setView('stage');
    this._entityService.setFeatureEntityById(entity.id);
  }

}
