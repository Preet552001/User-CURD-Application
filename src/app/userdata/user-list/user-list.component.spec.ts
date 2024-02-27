import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDataTable } from './user-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { UserApiService } from '../../service/user-api.service';
import { CloseDialogComponent } from './delete-dialog/close-dialog.component';
import { DialogContentExampleDialog } from './edit-dialog/dialog.component';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('User Data Table Component', () => {
  let component: UserDataTable;
  let fixture: ComponentFixture<UserDataTable>;
  let dialog: MatDialog;
  let userApiServiceSpy: jasmine.SpyObj<UserApiService>;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    const userApiServiceSpyObj = jasmine.createSpyObj('UserApiService', ['userGetApi']);
    await TestBed.configureTestingModule({
      declarations: [UserDataTable],
      imports: [MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, HttpClientTestingModule,MaterialModule,BrowserAnimationsModule],
      providers: [
        { provide: UserApiService, useValue: userApiServiceSpyObj }
      ]
    }).compileComponents();

    userApiServiceSpy = TestBed.inject(UserApiService) as jasmine.SpyObj<UserApiService>;
    dialog = TestBed.inject(MatDialog);
    httpTestingController = TestBed.inject(HttpTestingController);
    userApiServiceSpy.userGetApi.and.returnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create User Data Table Component', () => {
    expect(component).toBeTruthy();
  });

});
