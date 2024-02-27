import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '../../../material/material.module';

import { Com2Component } from './com2.component';

describe('Com2 Component', () => {
  let component: Com2Component;
  let fixture: ComponentFixture<Com2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Com2Component],
      imports: [MaterialModule],
    });
    fixture = TestBed.createComponent(Com2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Com2 Component', () => {
    expect(component).toBeTruthy();
  });
});
