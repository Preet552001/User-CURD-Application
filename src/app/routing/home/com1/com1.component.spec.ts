import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material/material.module';

import { Com1Component } from './com1.component';

describe('Com1 Component', () => {
  let component: Com1Component;
  let fixture: ComponentFixture<Com1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Com1Component],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(Com1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Com1 Component', () => {
    expect(component).toBeTruthy();
  });
});
