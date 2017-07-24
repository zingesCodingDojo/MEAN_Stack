import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-maker',
  templateUrl: './quote-maker.component.html',
  styleUrls: ['./quote-maker.component.css']
})
export class QuoteMakerComponent implements OnInit {
  @Input () quoteInfo;
  @Output () quoteEvent = new EventEmitter();
  myNewQuote = { quote: '', author: '', voteCount: 0};

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formData) {
      this.quoteEvent.emit(this.myNewQuote);
      this.myNewQuote = { quote: '', author: '', voteCount: 0};
  }

}
