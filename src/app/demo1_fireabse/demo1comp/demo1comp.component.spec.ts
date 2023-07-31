import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demo1compComponent } from './demo1comp.component';

describe('Demo1compComponent', () => {
  let component: Demo1compComponent;
  let fixture: ComponentFixture<Demo1compComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Demo1compComponent]
    });
    fixture = TestBed.createComponent(Demo1compComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
