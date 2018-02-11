import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureEntityComponent } from './feature-entity.component';

describe('FeatureEntityComponent', () => {
  let component: FeatureEntityComponent;
  let fixture: ComponentFixture<FeatureEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
