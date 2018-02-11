import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusEntitiesComponent } from './focus-entities.component';

describe('FocusEntitiesComponent', () => {
  let component: FocusEntitiesComponent;
  let fixture: ComponentFixture<FocusEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
