import { MaterialModule } from '../../../material/material.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CloseDialogComponent } from './close-dialog.component';
import { UserApiService } from '../../../service/user-api.service';

describe('Delete Dialog Component', () => {
  let component: CloseDialogComponent;
  let fixture: ComponentFixture<CloseDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<CloseDialogComponent>>;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;

  beforeEach(async () => {
    const dialogRefSpyObj = jasmine.createSpyObj('MatDialogRef', ['close']);
    const userApiServiceSpyObj = jasmine.createSpyObj('UserApiService', ['userDeleteApi']);

    await TestBed.configureTestingModule({
      declarations: [CloseDialogComponent],
      imports: [MaterialModule],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpyObj },
        { provide: MAT_DIALOG_DATA, useValue: { user: { id: 1 } } },
        { provide: UserApiService, useValue: userApiServiceSpyObj }
      ]
    }).compileComponents();

    dialogRefSpy = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<CloseDialogComponent>>;
    userApiServiceSpy = TestBed.inject(UserApiService) as jasmine.SpyObj<UserApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create About Delete Dialog Component', () => {
    expect(component).toBeTruthy();
  });

});
