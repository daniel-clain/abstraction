import { Injectable } from '@angular/core';
import { Entity } from './models/entity';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EntityService {
  
  
  entitiesCollection: AngularFirestoreCollection<Entity>;
  entitiesDoc: AngularFirestoreDocument<Entity>;
  
  entities: Entity[];
  entity_observable: Observable<Entity[]>;
  feature_entity: Entity;
  feature_entity_subject: Subject<Entity> = new Subject<Entity>();
  
  
  constructor(private fireStore: AngularFirestore) {
    this.entitiesCollection = this.fireStore.collection('entities');
    this.entity_observable = this.entitiesCollection.snapshotChanges().map(changes =>
      changes.map(change => {
        const data = change.payload.doc.data() as Entity;
        data.id = change.payload.doc.id;
        return data;
      })
    );
  
    this.entity_observable.subscribe(entities => this.entities = entities);
  }
  
  getTopLevelEntity(){
    return this.entities.find(entity => entity.top_level_entity);
  }
  
  updateEntity(entity: Entity){
    this.entitiesDoc = this.fireStore.doc(`entities/${entity.id}`);
    this.entitiesDoc.update(entity);
    console.log('Updated Entity: ', entity.name);
  }
  
  addEntity(entity: Entity){
    this.entitiesCollection.add(entity);
  }
  
  deleteEntity(entity: Entity){
    this.entitiesDoc = this.fireStore.doc('entities/' + entity.id);
    this.entitiesDoc.delete();
    window.location.reload();
  }
  
  getEntitiesByIds(entity_ids: string[]): Entity[]{
    return this.entities.filter(entity => entity_ids.indexOf(entity.id) >= 0);
  }
  
  setSubEntities(featureId: string, ids: string[]){
    this.entities.forEach(entity => {
      if (!entity.top_level_entity) {
        if (ids.indexOf(entity.id) >= 0) {
          if (entity.super_entity_ids.indexOf(featureId) === -1) {
            entity.super_entity_ids.push(featureId);
            this.updateEntity(entity);
          }
        }
        if (entity.super_entity_ids.indexOf(featureId) >= 0 && ids.indexOf(entity.id) === -1) {
          entity.super_entity_ids.splice(entity.super_entity_ids.indexOf(featureId), 1);
          this.updateEntity(entity);
          if (!entity.top_level_entity && entity.super_entity_ids.length === 0) {
            alert('Warning: ' + entity.name + ' has no super entities');
          }
        }
      }
    });
  }
  
  getSubEntities(featureId: string): Entity[]{
    return this.entities.filter(entity => {
      if (!entity.top_level_entity && entity.super_entity_ids.indexOf(featureId) >= 0){
        return true;
      }
      return false;
    });
  }
  
  getNoParentEntities(entities: Entity[]): Entity[]{
    return entities.filter(entity => {
      if (!entity.top_level_entity && entity.super_entity_ids.length === 0) {
        return true;
      }
    });
  }
  
  getFocusEntities(entities: Entity[]): Entity[]{
    return entities.filter((entity: Entity) => entity.focus_entity);
  }
  
  setFeatureEntityById(entity_id){
    this.feature_entity = this.entities.find(entity => entity.id === entity_id);
    this.feature_entity_subject.next(this.feature_entity);
  }

}
