import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { ToastrService } from 'ngx-toastr';
import { UserApiService } from '../../service/user-api.service';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('User Form Component', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;

  beforeEach(async () => {
    const toastrSpy = jasmine.createSpyObj('ToastrService', ['success']);
    const userApiSpy = jasmine.createSpyObj('UserApiService', ['userPostApi']);

    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule,MaterialModule,BrowserAnimationsModule],
      providers: [
        { provide: ToastrService, useValue: toastrSpy },
        { provide: UserApiService, useValue: userApiSpy }
      ]
    }).compileComponents();

    toastrServiceSpy = TestBed.inject(ToastrService) as jasmine.SpyObj<ToastrService>;
    userApiServiceSpy = TestBed.inject(UserApiService) as jasmine.SpyObj<UserApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create User Form Component', () => {
    expect(component).toBeTruthy();
  });
});
