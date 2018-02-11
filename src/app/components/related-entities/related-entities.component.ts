import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity } from '../../models/entity';
import { EntityService } from '../../entity.service';

@Component({
  selector: 'related-entities',
  templateUrl: './related-entities.component.html',
  styleUrls: ['./related-entities.component.sass']
})
export class RelatedEntitiesComponent implements OnInit{
  
  @Input() relation_type: string;
  entities: Entity[];
  
  constructor(private _entity_service: EntityService) { }
 
  ngOnInit(){
    this._entity_service.feature_entity_subject.subscribe((feature_entity: Entity) => {
      if (this.relation_type === 'Sub'){
        this.entities = this._entity_service.getSubEntities(feature_entity.id);
      }
      if (this.relation_type === 'Super'){
        if (!feature_entity.top_level_entity) {
          this.entities = this._entity_service.getEntitiesByIds(feature_entity.super_entity_ids);
        } else {
          delete this.entities;
        }
      }
    });
  }
  
  entitySelected(entity: Entity){
    this._entity_service.setFeatureEntityById(entity.id);
  }
}
