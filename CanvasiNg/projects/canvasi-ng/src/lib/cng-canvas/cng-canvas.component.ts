import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, Input } from '@angular/core';

@Component({
  selector: 'cng-canvas',
  templateUrl: './cng-canvas.component.html',
  styleUrls: ['./cng-canvas.component.scss']
})
export class CngCanvasComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas') canvasEl: ElementRef;

  private canvas = null;
  private canvasCtx = null;

  @Input() height = 500;
  @Input() width = 500;
  @Input() backColor = '#fff';
  @Input() drawColor = '#000';

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
