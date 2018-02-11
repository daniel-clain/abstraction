
export interface ToDoItem{
  date_created?: Date;
  parent_entity_id: string;
  details?: string;
  difficulty?: Difficulty;
  priority?: Priority;
  due_date?: Date;
  dependant_on?: ToDoItem[];
  reminder_alarms?: Date[];
}

export enum Difficulty{
  'Easy' = 'Easy',
  'Medium' = 'Medium',
  'Hard' = 'Hard'
}

export enum Priority{
  'Low' = 'Low',
  'Medium' = 'Medium',
  'High' = 'High'
}
