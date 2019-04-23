import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'cng-canvas',
  templateUrl: './cng-canvas.component.html',
  styleUrls: ['./cng-canvas.component.scss']
})
export class CngCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvasEl: ElementRef;

  colors = ['#006fba', '#fff'];
  colorIndex = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setInterval(() => { this.switchBgColor(); }, 1000);
  }

  switchBgColor() {
    // Add one and mod by array length to step through each array index
    this.colorIndex = ++this.colorIndex % this.colors.length;
    console.log(`Changing color to ${this.colors[this.colorIndex]}`);
    this.canvasEl.nativeElement.style = `background: ${this.colors[this.colorIndex]}`;
  }
}
