import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasiNgComponent } from './canvasi-ng.component';

describe('CanvasiNgComponent', () => {
  let component: CanvasiNgComponent;
  let fixture: ComponentFixture<CanvasiNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasiNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasiNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
