import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserDataTable } from '../user-list.component';
// import { HttpClient } from '@angular/common/http';
import {UserApiService} from '../../../service/user-api.service'

@Component({
  selector: 'app-close-dialog',
  templateUrl: './close-dialog.component.html',
  styleUrls: ['./close-dialog.component.css'],
})
export class CloseDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDataTable>,
    @Inject(MAT_DIALOG_DATA) public data,
    // private http:HttpClient
    private userApi:UserApiService
  ) {}
  
  Delete() {
    // let currentData=JSON.parse(localStorage.getItem("userData"))
    // console.log(currentData)
    // console.log(this.data.user)
    // let index=currentData.indexOf(this.data.user)
    // console.log(index)
    // console.log(this.data.user.id-1)
    // let data = currentData.filter((data)=>data.id!=(this.data.user.id))
    // console.log(data);
    // delete(currentData[(this.data.user.id-1)])
    // console.log(currentData)
    // localStorage.setItem("userData",JSON.stringify(currentData))

    // this.userApi.userDeleteApi(this.data.user.id).subscribe()
    // if(this.data.user.id>30){
    //   this.http.delete(`http://localhost:8080/user/${this.data.user.id}`).subscribe((val)=>{
    //     console.log(val)
    //   })
    // }
    // localStorage.setItem("userData",JSON.stringify(data))
    this.userApi.userDeleteApi(this.data.user.id).subscribe()    
    this.dialogRef.close();
  }
}
