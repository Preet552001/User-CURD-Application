import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogContentExampleDialog } from './dialog.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { UserApiService } from '../../../service/user-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../../../material/material.module';


describe('Edit Dialog Component', () => {
  let component: DialogContentExampleDialog;
  let fixture: ComponentFixture<DialogContentExampleDialog>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<DialogContentExampleDialog>>;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;

  beforeEach(async () => {
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);
    const userApiServiceSpyObj = jasmine.createSpyObj('UserApiService', ['userPutApi']);

    await TestBed.configureTestingModule({
      declarations: [DialogContentExampleDialog],
      imports: [ReactiveFormsModule,MaterialModule,BrowserAnimationsModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: { user: { id: 1, firstName: 'John', lastName: 'Doe', gender: 'male', birthDate: '1990-01-01', email: 'john@example.com', address: { address: '123 Street' } } } },
        { provide: UserApiService, useValue: userApiServiceSpyObj },
        FormBuilder
      ]
    }).compileComponents();

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DialogContentExampleDialog>>;
    userApiServiceSpy = TestBed.inject(UserApiService) as jasmine.SpyObj<UserApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogContentExampleDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Edit Dialog Component', () => {
    expect(component).toBeTruthy();
  });

});
