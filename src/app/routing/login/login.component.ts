import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthService } from 'src/app/service/auth.service';
import {UserLogin} from '../../interface/userLogin'
import { UserLoginJwtService } from 'src/app/service/user-login-jwt.service';
import { LoaderService } from 'src/app/service/loader.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  hide = true;
  // _user:string=''
  // _password:string=''

  // @Output()LoginEvent = new EventEmitter()
  constructor(
    // private authService: AuthService,
    private router: Router,
    private avtiveRoute: ActivatedRoute,
    private userlogin:UserLoginJwtService,
    private loder:LoaderService,
    private toastr: ToastrService
  ) {}


  ngOnInit() {
    // if(Boolean(localStorage.getItem('isLogged'))==false){

    // }
    this.avtiveRoute.queryParamMap.subscribe((val) => {
      const logout = Boolean(val.get('logout'));
      if (logout === true) {
        this.userlogin.logout();
        // this.userlogin.datatoggle.next(false)
        this.toastr.success('User Has Logout','Logout',{
          timeOut: 3000,
          positionClass: 'toast-bottom-right',
        });
        // alert('You are Logout');
      }
    });
  }
  @ViewChild('user') userName: ElementRef;
  @ViewChild('password') password: ElementRef;
  isSubmitted: boolean = false;
  OnLoginClick() {
    const userName = this.userName.nativeElement.value;
    const password = this.password.nativeElement.value;
    this.userlogin.userLoginJwtApi(userName, password).subscribe((data : UserLogin)=>{
      this.loder.showLoader.next(true)
      
      if (data.jwtToken === undefined) {
        this.userlogin.datatoggle.next(false)
        
      } else {
        if (data.userName === undefined) {
          
          // alert('Not Login');
        } else {
          // setTimeout(()=>{
            this.userlogin.datatoggle.next(true)
            localStorage.setItem('jwt',data.jwtToken);
            this.toastr.success(`Welcome ${data.userName}`,'',{
              timeOut: 3000,
              positionClass: 'toast-bottom-right',
            });
            // alert(`Welcome ${data.userName}`);
            this.router.navigate(['/user']);
            this.isSubmitted = true;
            this.loder.showLoader.next(false)
            // },5000)
          // this.LoginEvent.emit(true)
        }
      }
      this.canExit();
    },(error)=>{
      this.loder.showLoader.next(false)
          this.toastr.error('Invalid Username or Password','',{
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
          });
      // alert('Invalid login credentials');
      // this.loder.showLoader.next(false)
    },()=>{});
  }
  canExit() {
    if (
      (this.userName.nativeElement.value ||
        this.password.nativeElement.value) &&
      !this.isSubmitted
    ) {
      // this.toastr.warning('You have not login','',{
      //   timeOut: 3000,
      //   positionClass: 'toast-bottom-right',
      // });
      return confirm('You have not login');
    } else {
      return true;
    }
  }
}