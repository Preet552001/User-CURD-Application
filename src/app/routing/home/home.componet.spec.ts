import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from '../../material/material.module';
import { RouterModule } from '@angular/router';
import{Com1Component}from './com1/com1.component'
import{Com2Component}from'./com2/com2.component'

describe('Home Component', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent,Com1Component,Com2Component],
      imports: [MaterialModule,RouterModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            fragment: new BehaviorSubject<string>(null)
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });

});
