import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ViewService {
  
  current_view: string;
  view_subject: Subject<string> = new Subject<string>();

  constructor() { }
  
  setView(view_name: string) {
    this.current_view = view_name;
    this.view_subject.next(this.current_view);
  }
  

}
