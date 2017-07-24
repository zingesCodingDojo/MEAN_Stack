import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-all-my-quotes',
  templateUrl: './all-my-quotes.component.html',
  styleUrls: ['./all-my-quotes.component.css']
})
export class AllMyQuotesComponent implements OnInit {
  @Input () quoteInfo;
  @Output () allQuotesEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  likeQuote(quote) {
      quote.voteCount += 1;
  }

  dislikeQuote(quote) {
      quote.voteCount -= 1;
  }

  delete(quote) {
    console.log('Trying to remove: ' + quote);
    this.allQuotesEmitter.emit(quote);
  }
}
