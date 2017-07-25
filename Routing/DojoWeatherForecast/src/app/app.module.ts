import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonDCComponentComponent } from './washington-dccomponent/washington-dccomponent.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';
import { ForecastpingService } from './forecastping.service';
@NgModule({
  declarations: [
    AppComponent,
    SeattleComponentComponent,
    SanJoseComponentComponent,
    BurbankComponentComponent,
    DallasComponentComponent,
    WashingtonDCComponentComponent,
    ChicagoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [ForecastpingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
