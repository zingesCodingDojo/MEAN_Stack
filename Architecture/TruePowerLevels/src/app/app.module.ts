import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PowerLevelMasterComponent } from './power-level-master/power-level-master.component';
import { HumanComponent } from './power-level-master/human/human.component';
import { SaiyanComponent } from './power-level-master/saiyan/saiyan.component';
import { SupersaiyanComponent } from './power-level-master/supersaiyan/supersaiyan.component';
import { SupersaiyanTWOComponent } from './power-level-master/supersaiyan-two/supersaiyan-two.component';
import { SupersaiyanTHREEComponent } from './power-level-master/supersaiyan-three/supersaiyan-three.component';
import { SupersaiyanFOURComponent } from './power-level-master/supersaiyan-four/supersaiyan-four.component';

@NgModule({
  declarations: [
    AppComponent,
    PowerLevelMasterComponent,
    HumanComponent,
    SaiyanComponent,
    SupersaiyanComponent,
    SupersaiyanTWOComponent,
    SupersaiyanTHREEComponent,
    SupersaiyanFOURComponent
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
