import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoParentEntitiesComponent } from './no-parent-entities.component';

describe('NoParentEntitiesComponent', () => {
  let component: NoParentEntitiesComponent;
  let fixture: ComponentFixture<NoParentEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoParentEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoParentEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
