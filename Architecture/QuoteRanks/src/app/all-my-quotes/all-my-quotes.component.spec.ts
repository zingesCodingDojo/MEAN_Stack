import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMyQuotesComponent } from './all-my-quotes.component';

describe('AllMyQuotesComponent', () => {
  let component: AllMyQuotesComponent;
  let fixture: ComponentFixture<AllMyQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMyQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
