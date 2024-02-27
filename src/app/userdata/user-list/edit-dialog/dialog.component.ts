import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { UserDataTable } from "../user-list.component";
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import {UserApiService} from '../../../service/user-api.service'
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  styleUrls: ['./dialog.component.css'],  
})
export class DialogContentExampleDialog {
// data: any;
  constructor(
    public dialogRef: MatDialogRef<UserDataTable>,
    @Inject(MAT_DIALOG_DATA) public data,
    private fb: FormBuilder,
    // private http:HttpClient
    private userApi:UserApiService
  ) {}
  registrationForm: FormGroup;

  ngOnInit() {
    // console.log(this.data.user.address)
    this.registrationForm = this.fb.group({
      firstName: [this.data.user.firstName, [Validators.required]],
      lastName:[this.data.user.lastName,[Validators.required]],
      gender: [this.data.user.gender,[Validators.required]],
      birthDate: [this.data.user.birthDate,[Validators.required]],
      email: [this.data.user.email,[Validators.required]],
      address:[this.data.user.address.address,[Validators.required]],
    })
  }
  
  Save(): void {
  this.dialogRef.close();
  // console.log(this.registrationForm.value.email)
  // (JSON.parse(localStorage.getItem('userData')))[this.data.user.id-1].firstName=this.registrationForm.value.firstName
  // (JSON.parse(localStorage.getItem('userData')))[this.data.user.id-1].email=this.registrationForm.value.email
    
    let userdata=JSON.parse(localStorage.getItem('userData'))
    this.data.user.firstName=this.registrationForm.value.firstName
    this.data.user.lastName=this.registrationForm.value.lastName
    this.data.user.gender=this.registrationForm.value.gender
    this.data.user.birthDate=this.registrationForm.value.birthDate
    // userdata[this.data.user.id-1].phone=this.registrationForm.value.phone
    this.data.user.email=this.registrationForm.value.email
    // if(this.data.user.id<=30){
    //   userdata[this.data.user.id-1].address.address=this.registrationForm.value.address
    // }else{
      this.data.user.address.address=this.registrationForm.value.address
    // }
    // if(this.data.user.id>30){
      // console.log(this.data.user)

      this.userApi.userPutApi(this.data.user).subscribe();
      
    // }
    // localStorage.setItem("userData",JSON.stringify(userdata))
}
}