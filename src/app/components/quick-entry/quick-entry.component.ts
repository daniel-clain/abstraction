import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityService } from '../../entity.service';
import { Entity } from '../../models/entity';
import { EntitySearchComponent } from '../entity-search/entity-search.component';

@Component({
  selector: 'quick-entry',
  templateUrl: './quick-entry.component.html',
  styleUrls: ['./quick-entry.component.sass']
})
export class QuickEntryComponent implements OnInit {
  
  
  @ViewChild(EntitySearchComponent) search: EntitySearchComponent;
  
  selectedEntryType: string;
  
  entity: Entity = {
    name: '',
    super_entity_ids: []
  };
  
  constructor(private _entityService: EntityService) { }
  

  ngOnInit() {
  }
  
  addEntity(entity: Entity){
    if(this.validate(entity)) {
      this._entityService.addEntity(entity);
      this.resetEntity();
    }
  }
  
  
  validate(entity: Entity): boolean{
    if(entity.name === ''){
      alert('You must give your entity a name')
      return false
    }
    if(!this.entity.top_level_entity && this.entity.super_entity_ids.length === 0){
      alert('Warning: ' + this.entity.name +' has no super entities');
    }
    return true;
  }
  
  resetEntity(){
    this.entity = {
      name: '',
      super_entity_ids: []
    };
    this.search.reset();
  }
  
  selectEntryType(type: string){
    this.selectedEntryType = type;
  }
}
