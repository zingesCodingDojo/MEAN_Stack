import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.myPower *= 90;
  }

}
