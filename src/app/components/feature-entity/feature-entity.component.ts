import { Component, OnInit, Input } from '@angular/core';
import { EntityService } from '../../entity.service';
import { Entity } from '../../models/entity';
import { ViewService } from '../../view.service';

@Component({
  selector: 'feature-entity',
  templateUrl: './feature-entity.component.html',
  styleUrls: ['./feature-entity.component.sass']
})

export class FeatureEntityComponent implements OnInit{
  
  @Input() feature_entity: Entity;
  
  sub_entities_id_list: string[];
  
  show_super_list = false;
  show_sub_list = false;
  show_todos = false;
  
  
  constructor(private _entityService: EntityService, private _viewService: ViewService) { }
  
  ngOnInit() {
    this._entityService.entity_observable.subscribe(entities => {
      console.log('entity count: ', entities.length);
      if (!this.feature_entity){
        this._entityService.setFeatureEntityById(this._entityService.getTopLevelEntity().id);
      }
    });
    
    this._entityService.feature_entity_subject.subscribe(entity => {
      this.feature_entity = entity;
      this.getSubEntitiesIdList();
    });
    this._viewService.view_subject.subscribe(view => {
      if (view === 'stage'){
        if (!this.feature_entity){
          this._entityService.setFeatureEntityById(this._entityService.getTopLevelEntity().id);
        }
      }
    });
  }
  
  getSubEntitiesIdList(){
    this.sub_entities_id_list = this._entityService.getSubEntities(this.feature_entity.id)
      .map(entity => this.feature_entity.id);
  }
  
  
  updateSubEntities(){
    this._entityService.setSubEntities(this.feature_entity.id, this.sub_entities_id_list);
  }
  
  updateEntity(){
    this._entityService.updateEntity(this.feature_entity);
    if (!this.feature_entity.top_level_entity && this.feature_entity.super_entity_ids.length === 0){
      alert('Warning: ' + this.feature_entity.name + ' has no super entities');
    }
  }
  
  deleteEntity(){
    const confirmResult: boolean = confirm('Are you sure you want to delete this Entity: ' + this.feature_entity.name);
    if (confirmResult){
      const delete_entity = {...this.feature_entity};
      delete this.feature_entity;
      this._entityService.deleteEntity(delete_entity);
    }
  }
 
  
}
