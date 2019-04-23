import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CngCanvasComponent } from './cng-canvas.component';

describe('CngCanvasComponent', () => {
  let component: CngCanvasComponent;
  let fixture: ComponentFixture<CngCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CngCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CngCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
