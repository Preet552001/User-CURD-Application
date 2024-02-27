import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataTable } from './user-list/user-list.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { UserService } from '../service/user.service';
import { UserApiService } from '../service/userAPI.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CloseDialogComponent } from './user-list/delete-dialog/close-dialog.component';
// import { FormGroup }   from '@angular/forms';
import {MaterialModule} from '../material/material.module'
import {NgFor} from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import {CloseDialogComponent} from './user-list/delete-dialog/close-dialog.component'
import {DialogContentExampleDialog} from './user-list/edit-dialog/dialog.component'

const routes: Routes=[{path:'', component: UserDataTable}]

@NgModule({
  declarations: [
    UserDataTable,
    CloseDialogComponent,
    DialogContentExampleDialog
  ],
  imports: [
    
    CommonModule,
    // UserDataTable,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgFor,
    TitleCasePipe,
    RouterModule.forChild(routes)
  ],
  exports:[
    // CommonModule,
    // FormsModule,
    // FormGroup
    // MaterialModule
  ],
  providers: [UserService,UserApiService],
})
export class UserdataModule { }
