import { Component, inject } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { UserLoginJwtService } from './service/user-login-jwt.service';
import { LoaderService } from './service/loader.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private userlogin:UserLoginJwtService,
    private loder:LoaderService
  ) {}

  showLoader: boolean=false
  // router: Router=inject(Router)
  ngOnInit(){

    this.loder.currentDataLoader.subscribe(data=>{
      console.log(data)
      this.showLoader=data
    })
    // if(String(localStorage.getItem('jwt'))!=='null' ){
    //   this.userlogin.datatoggle.next(true)
    // }
    // else{
    //   this.userlogin.datatoggle.next(false)
    // }
  }

}
