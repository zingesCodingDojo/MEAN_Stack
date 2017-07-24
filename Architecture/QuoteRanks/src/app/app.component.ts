import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quoteInfo: Array<object> = [{ quote: 'Hello everyone', author: 'Your mom', voteCount: 0}];

  createNewQuote(newQuote) {
    console.log('Your new quote and stuff is: ' + newQuote);
    this.quoteInfo.push(newQuote);
  }
  removeQuote(singleQuote) {
      const i = this.quoteInfo.indexOf(singleQuote);
      this.quoteInfo.splice(i, 1);
  }
}
