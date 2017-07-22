import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponentComponent } from './main-body-component.component';

describe('MainBodyComponentComponent', () => {
  let component: MainBodyComponentComponent;
  let fixture: ComponentFixture<MainBodyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
