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
    this.initCanvas();
  }

  initCanvas() {
    this.canvas = this.canvasEl.nativeElement;
    this.canvasCtx = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;

    this.fillBg();
  }

  fillBg() {
    this.canvasCtx.fillStyle = this.backColor;
    this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
