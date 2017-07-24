import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteMakerComponent } from './quote-maker/quote-maker.component';
import { QuoteDetailsComponent } from './quote-maker/quote-details/quote-details.component';
import { AllMyQuotesComponent } from './all-my-quotes/all-my-quotes.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteMakerComponent,
    QuoteDetailsComponent,
    AllMyQuotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
