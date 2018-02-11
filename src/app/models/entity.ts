import { ToDoItem } from './to-do-item';

export interface Entity {
  id?: string;
  name: string;
  super_entity_ids: string[];
  top_level_entity?: boolean;
  todo_items?: ToDoItem[];
  focus_entity?: boolean;
}
