import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntityService } from '../../entity.service';
import { Entity } from '../../models/entity';

@Component({
  selector: 'entity-search',
  templateUrl: './entity-search.component.html',
  styleUrls: ['./entity-search.component.sass']
})
export class EntitySearchComponent implements OnInit {
  @Input() selectionType: string;
  @Output() selectionMade = new EventEmitter<string[]>();
  @Input() selectionList: string[] = [];
  allEntities: Entity[];
  search_string: string;

  constructor(private _entityService: EntityService) { }

  ngOnInit() {
    this.allEntities = this._entityService.entities;
    this._entityService.entity_observable.subscribe((entities: Entity[]) => {
      this.allEntities = entities;
    });
  }
  
  addRemoveEntity(entity: Entity){
    const indexOfId = this.selectionList.indexOf(entity.id);
    if (indexOfId >= 0) {
      this.selectionList.splice(indexOfId, 1);
    } else {
      this.selectionList.push(entity.id);
    }
    this.selectionMade.emit(this.selectionList);
  }
  
  reset(){
    this.selectionList = [];
    this.search_string = '';
  }
  
}

