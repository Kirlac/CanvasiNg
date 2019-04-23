import { NgModule } from '@angular/core';
import { CanvasiNgComponent } from './canvasi-ng.component';
import { CngCanvasComponent } from './cng-canvas/cng-canvas.component';

@NgModule({
  declarations: [CanvasiNgComponent, CngCanvasComponent],
  imports: [
  ],
  exports: [CanvasiNgComponent, CngCanvasComponent]
})
export class CanvasiNgModule { }
