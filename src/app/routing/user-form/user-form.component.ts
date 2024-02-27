import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  FormArray,
  FormGroupDirective,
} from '@angular/forms';
// import { pincode } from '../../service/pin.service';
import { map } from 'rxjs/operators';

// import { pincodeAsyncValidator } from './pincode.validator';
// import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
// import { PincodeValidator } from '../../service/pincode-validator.service';
import { ToastrService } from 'ngx-toastr';
import{UserApiService} from '../../service/user-api.service'
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [
    // pincode
  ],
})
export class UserFormComponent implements OnInit {

  @ViewChild(FormGroupDirective)
  private formDir:FormGroupDirective

  registrationForm : any
  id
  // currentData

  constructor(
    private fb: FormBuilder,
    // private httpClient: HttpClient,
    // private pin: pincode,
    private toastr: ToastrService,
    private userApi:UserApiService
    // private http:HttpClient
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      birthDate: [, [Validators.required]],
      gender: [, [Validators.required]],
      address: this.fb.group({
        address: ['', [Validators.required]],
        city: ['',[Validators.required]],
        state: ['',[Validators.required]],
        pincode: [
          '',
          [Validators.required],
          // ,[PincodeValidator.createValidator(this.pin)]
        ],
      }),
    });
  }
  ngOnInit() {
    // this.userApi.userGetApi().subscribe((data)=>{
    //   this.id=data[(Object.keys(data).length-1)].id
    // // console.log(this.id)
    // })
    
  }

  // pincodeshow(){
  //   // this.pin.pin_finder('500')
  //   // console.log(this.pin.output)
  //   this.pin.pin_finder('500').subscribe((data)=>{
  //     console.log(data)
  //   })
  // }
  setdata(val: Event) {
    // this.pin.pin_finder((val.target as HTMLInputElement).value).subscribe((data)=>{
    //   console.log(data)
    //   this.registrationForm.patchValue({
    //     city: data[0].PostOffice[0].Division,
    //     state: data[0].PostOffice[0].State,
    //   });
    // }
    // )
    // console.log()
  }

  AddnewUser() {
    
      let newUser=this.registrationForm.value
      let d=new Date()
      d.getUTCDate()
      // newUser['id']=this.id+1
      
      // let date
      
      // date=newUser.birthDate.setDate(newUser.birthDate.getDate()+1)
      newUser.birthDate=new Date(newUser.birthDate.getTime()+86400000).toISOString().split('T')[0]
      // console.log(date.toISOString().split('T')[0])
     
      // console.log(date.format())
      // .toISOString().split('T')[0].join('')
      console.log(newUser)
      let userdata=newUser
      // userdata.address=userdata.address.address+','+userdata.address.city+','+userdata.address.state+','+userdata.address.pincode
      this.userApi.userPostApi(userdata).subscribe()
    // let data=JSON.parse(localStorage.getItem("userData"))
    // data.push(newUser)
    // console.log(data)
    // localStorage.setItem("userData",JSON.stringify(data))

    // this.registrationForm.rese
    this.toastr.success('User is Added','',{
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
    }); 
    this.formDir.resetForm();
  }
}
