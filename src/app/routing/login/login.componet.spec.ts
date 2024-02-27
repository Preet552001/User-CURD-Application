import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserLoginJwtService } from 'src/app/service/user-login-jwt.service';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from 'ngx-toastr';

describe('Login Component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userLoginJwtServiceStub: Partial<UserLoginJwtService>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;


  beforeEach(async () => {
    userLoginJwtServiceStub = {
      userLoginJwtApi: jasmine.createSpy().and.returnValue(of({ jwtToken: 'mockToken', userName: 'mockUser' })),
      logout: jasmine.createSpy()
    };
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [BrowserAnimationsModule,RouterTestingModule,MaterialModule],
      providers: [
        { provide: ActivatedRoute, useValue: { queryParamMap: of({ get: () => true }) } },
        { provide: UserLoginJwtService, useValue: userLoginJwtServiceStub },
        { provide: ToastrService, useValue: toastrSpy },

      ]
    }).compileComponents();
    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });
});
