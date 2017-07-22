import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-power-level-master',
  templateUrl: './power-level-master.component.html',
  styleUrls: ['./power-level-master.component.css']
})
export class PowerLevelMasterComponent implements OnInit {
  myPower: number;
  constructor() { }

  ngOnInit() {
      this.myPower = 1;
  }

}
