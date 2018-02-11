import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from '../models/entity';

@Pipe({
  name: 'entityNameFilter'
})
export class SearchPipe implements PipeTransform {

  transform(entities: Entity[], search_string: string): Entity[] {
    if(!search_string){
      return entities;
    } else {
      return entities.filter((entity: Entity) => {
        if(entity.name.toLocaleLowerCase().includes(search_string)){
          return true;
        }
      })
    }
  }

}

