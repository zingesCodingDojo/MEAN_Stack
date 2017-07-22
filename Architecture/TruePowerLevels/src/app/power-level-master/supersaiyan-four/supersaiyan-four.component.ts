import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-four',
  templateUrl: './supersaiyan-four.component.html',
  styleUrls: ['./supersaiyan-four.component.css']
})
export class SupersaiyanFOURComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.myPower *= 500;
  }
}
