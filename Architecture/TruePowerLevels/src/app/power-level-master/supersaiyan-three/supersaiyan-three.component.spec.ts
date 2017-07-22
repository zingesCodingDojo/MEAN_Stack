import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanTHREEComponent } from './supersaiyan-three.component';

describe('SupersaiyanTHREEComponent', () => {
  let component: SupersaiyanTHREEComponent;
  let fixture: ComponentFixture<SupersaiyanTHREEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanTHREEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanTHREEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
