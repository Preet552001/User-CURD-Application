import { Component, inject } from '@angular/core';
import { UserLoginJwtService } from 'src/app/service/user-login-jwt.service';
import { canActivate } from '../guard/auth.guard';
// import {LogginServiceTsService} from'../loggin.service.ts.service'

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent {
  toogel: boolean=false;
  constructor(private authService: UserLoginJwtService){}

  // loggin: LogginServiceTsService = inject(LogginServiceTsService)
  // UserLoggin:boolean
  ngOnInit() {
 
    this.authService.currentDatatoggle.subscribe((data)=>{

      // console.log(data)
      this.toogel=data
    })

  }
  
}
