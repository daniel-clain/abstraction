import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleComponent } from './module.component';

describe('ModuleComponent', () => {
  let component: ModuleComponent;
  let fixture: ComponentFixture<ModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an api', () => {
    // needs a list of functions, what input do they take, what output do they produce
    expect(component.connectToThisModule().not.toBeNull);
  });
});
