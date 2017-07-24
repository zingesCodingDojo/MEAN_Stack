import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteMakerComponent } from './quote-maker.component';

describe('QuoteMakerComponent', () => {
  let component: QuoteMakerComponent;
  let fixture: ComponentFixture<QuoteMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
