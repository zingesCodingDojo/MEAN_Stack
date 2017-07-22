import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerLevelMasterComponent } from './power-level-master.component';

describe('PowerLevelMasterComponent', () => {
  let component: PowerLevelMasterComponent;
  let fixture: ComponentFixture<PowerLevelMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerLevelMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerLevelMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
