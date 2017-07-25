import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonDCComponentComponent } from './washington-dccomponent.component';

describe('WashingtonDCComponentComponent', () => {
  let component: WashingtonDCComponentComponent;
  let fixture: ComponentFixture<WashingtonDCComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtonDCComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonDCComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
