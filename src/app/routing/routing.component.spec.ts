import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RoutingComponent } from './routing.component';
import { UserLoginJwtService } from 'src/app/service/user-login-jwt.service';
import { BehaviorSubject } from 'rxjs';
import { MaterialModule } from '../material/material.module';

describe('Routing Component', () => {
  let component: RoutingComponent;
  let fixture: ComponentFixture<RoutingComponent>;
  let userLoginJwtServiceSpy: jasmine.SpyObj<UserLoginJwtService>;

  beforeEach(async () => {

    const userLoginJwtSpy = jasmine.createSpyObj('userLoginJwtServiceSpy',{},{currentDatatoggle:new BehaviorSubject<boolean>(false)});


    await TestBed.configureTestingModule({
      imports:[MaterialModule],
      declarations: [RoutingComponent],
      providers: [
        {provide: UserLoginJwtService, useValue: userLoginJwtSpy}
      ]
    })
    .compileComponents();

    userLoginJwtServiceSpy = TestBed.inject(UserLoginJwtService) as jasmine.SpyObj<UserLoginJwtService>;

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create routing component', () => {
    expect(component).toBeTruthy();
  });
});
