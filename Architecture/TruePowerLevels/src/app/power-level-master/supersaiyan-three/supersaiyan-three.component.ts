import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan-three',
  templateUrl: './supersaiyan-three.component.html',
  styleUrls: ['./supersaiyan-three.component.css']
})
export class SupersaiyanTHREEComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.myPower *= 250;
  }

}
