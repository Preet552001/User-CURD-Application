// import { Injectable } from '@angular/core';
// import { UserService } from './userLogin.service';
// import { UserLoginJwtService } from './user-login-jwt.service';
// import { BehaviorSubject, Subject } from 'rxjs';
// import {UserLogin} from '../interface/userLogin'
// import { Router } from '@angular/router';


// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   private datatoggle = new BehaviorSubject(
//     Boolean(localStorage.getItem('isLogged'))
//   );
//   currentDatatoggle = this.datatoggle.asObservable();

//   isLogged: boolean = false;

//   private user$=new BehaviorSubject(null);

//   currentUser = this.user$.asObservable();

//   user:string;

//   constructor(private userService: UserService, private userJwt : UserLoginJwtService,
//     private router: Router,) {}
//   login(userName: string, password: string) {

//     this.userJwt.userLoginJwtApi(userName,password).subscribe((data:UserLogin)=>{
//       console.log(data.jwtToken)
//       console.log(data.userName)
//       // console.log(data[1])
      
//       if (data.jwtToken === undefined) {
//         this.isLogged = false;
//         localStorage.setItem('isLogged', 'false');
//       } else {
//         this.isLogged = true;
//         localStorage.setItem('jwt',data.jwtToken);
//         // localStorage.setItem('user',data.userName);
//         localStorage.setItem('isLogged', 'true');
//         if (data.userName === undefined) {
//           alert('Not Login');
//         } else {
//           alert(`Welcome ${data.userName}`);
//           this.router.navigate(['/user']);
//           // this.isSubmitted = true;
//           // this.LoginEvent.emit(true)
//         }
//       }
//       // return data.userName;
//     })


//     // let user = this.userService.users.find(
//     //   (u) => u.userName === userName && u.password === password
//     // );
//     // if (user === undefined) {
//     //   this.isLogged = false;
//     //   localStorage.setItem('isLogged', 'false');
//     // } else {
//     //   this.isLogged = true;
//     //   localStorage.setItem('isLogged', 'true');
//     // }
    
    
    
//   }
//   logout() {
//     this.isLogged = false;
//     localStorage.setItem('isLogged', 'false');
//     localStorage.setItem('jwt',null);
//     // localStorage.setItem('user',null);
//     this.datatoggle.next(this.isLogged);
//   }

// }
