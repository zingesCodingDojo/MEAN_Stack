import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    mySwitches: Array<boolean> = [true, true, true, true, true, true, true, true, true, true];
    wasIClicked(i) {
        this.mySwitches[i] = !this.mySwitches[i];
    }

}
