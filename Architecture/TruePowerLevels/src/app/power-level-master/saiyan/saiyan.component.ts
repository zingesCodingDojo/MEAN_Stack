import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit, OnChanges {
  @Input() myPower;
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges() {
    this.myPower *= 10;
  }

}
