import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  colorArray = [];

  generateColor () {
    for (let i = 0; i < 20; i++) {
      const myRandomNumber = (Math.floor(Math.random() * 20)) + 1;
      if (myRandomNumber === 1) {
        this.colorArray.push('AliceBlue');
      } else if (myRandomNumber === 2) {
        this.colorArray.push('Aqua');
      } else if (myRandomNumber === 3) {
        this.colorArray.push('Aquamarine');
      } else if (myRandomNumber === 4) {
        this.colorArray.push('Azure');
      } else if (myRandomNumber === 5) {
        this.colorArray.push('Blue');
      } else if (myRandomNumber === 6) {
        this.colorArray.push('BlueViolet');
      } else if (myRandomNumber === 7) {
        this.colorArray.push('Chartreuse');
      } else if (myRandomNumber === 8) {
        this.colorArray.push('Coral');
      } else if (myRandomNumber === 9) {
        this.colorArray.push('CornflowerBlue');
      } else if (myRandomNumber === 10) {
        this.colorArray.push('Cornsilk');
      } else if (myRandomNumber === 11) {
        this.colorArray.push('Cyan');
      } else if (myRandomNumber === 12) {
        this.colorArray.push('DarkCyan');
      } else if (myRandomNumber === 13) {
        this.colorArray.push('DarkGoldenRod');
      } else if (myRandomNumber === 14) {
        this.colorArray.push('DarkKhaki');
      } else if (myRandomNumber === 15) {
        this.colorArray.push('DarkMagenta');
      } else if (myRandomNumber === 16) {
        this.colorArray.push('DarkOliveGreen');
      } else if (myRandomNumber === 17) {
        this.colorArray.push('DarkOrange');
      } else if (myRandomNumber === 18) {
        this.colorArray.push('DarkOrchid');
      } else if (myRandomNumber === 19) {
        this.colorArray.push('DarkSalmon');
      } else if (myRandomNumber === 20) {
        this.colorArray.push('DeepSkyBlue');
      }
    }
  }

  ngOnInit() {
    this.generateColor();
  }
}
