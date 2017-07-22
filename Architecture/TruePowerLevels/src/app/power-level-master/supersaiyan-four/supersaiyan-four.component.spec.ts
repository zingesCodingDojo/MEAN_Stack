import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanFOURComponent } from './supersaiyan-four.component';

describe('SupersaiyanFOURComponent', () => {
  let component: SupersaiyanFOURComponent;
  let fixture: ComponentFixture<SupersaiyanFOURComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanFOURComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanFOURComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
