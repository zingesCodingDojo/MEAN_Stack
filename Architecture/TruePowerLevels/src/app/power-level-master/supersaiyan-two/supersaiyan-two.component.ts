import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-two',
  templateUrl: './supersaiyan-two.component.html',
  styleUrls: ['./supersaiyan-two.component.css']
})
export class SupersaiyanTWOComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.myPower *= 150;
  }

}
