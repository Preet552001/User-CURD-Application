import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppRoutingModule, routes } from './app-routing.module';
import { Router } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { Com1Component } from './routing/home/com1/com1.component';
import { Com2Component } from './routing/home/com2/com2.component';
import { Location } from '@angular/common';
import { MaterialModule } from './material/material.module';


describe('App-Routing Module', () => {

    let router: Router;
    let fixture: ComponentFixture<HomeComponent>;
    // let aboutFixture: ComponentFixture<AboutComponent>;
    let location : Location;
  beforeEach(waitForAsync(()=>{
    TestBed.configureTestingModule({
        imports: [AppRoutingModule,MaterialModule,],
        declarations: [
            HomeComponent,
            Com1Component,
            Com2Component,
            // AboutComponent
        ],
      }).compileComponents();
  }))

  beforeEach(()=>{
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture= TestBed.createComponent(HomeComponent)
    // aboutFixture= TestBed.createComponent(AboutComponent)
  })

  it('should create App-Routing Module', () => {
    expect(AppRoutingModule).toBeTruthy();
  });

  it('should navigate to Home Component when path is empty',waitForAsync(()=>{
    fixture.detectChanges();
    fixture.whenStable().then(()=>{
        expect(location.path()).toBe('')
    });
  }))
//   it('should navigate to About Component when path is about',waitForAsync(()=>{
//     aboutFixture.detectChanges();
//     aboutFixture.whenStable().then(()=>{
//         expect(location.path()).toBe('/about')
//     });
//   }))
});
