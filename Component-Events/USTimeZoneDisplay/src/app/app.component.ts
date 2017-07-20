import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    myCurrentTime: Date;
    mySelectedValue = null;
    // I will display Pacific Time
    onPST() {
        this.myCurrentTime = new Date();
        this.mySelectedValue = 'Pacific';
    }
    // I will display Mountain Time
    onMST() {
      this.myCurrentTime = new Date();
      this.myCurrentTime.setHours(this.myCurrentTime.getHours() + 1);
      this.mySelectedValue = 'Mountain';
    }
    // I will display Central Time
    onCST() {
      this.myCurrentTime = new Date();
      this.myCurrentTime.setHours(this.myCurrentTime.getHours() + 2);
      this.mySelectedValue = 'Central';
    }
    // I will display Eastern Time
    onEST() {
      this.myCurrentTime = new Date();
      this.myCurrentTime.setHours(this.myCurrentTime.getHours() + 3);
      this.mySelectedValue = 'Eastern';
    }
    // I will clear Time
    clear() {
      this.myCurrentTime = null;
      this.mySelectedValue = null;
    }
}
