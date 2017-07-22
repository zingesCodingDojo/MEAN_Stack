import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupersaiyanTWOComponent } from './supersaiyan-two.component';

describe('SupersaiyanTWOComponent', () => {
  let component: SupersaiyanTWOComponent;
  let fixture: ComponentFixture<SupersaiyanTWOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupersaiyanTWOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupersaiyanTWOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
