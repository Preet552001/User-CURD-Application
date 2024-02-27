import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  userId:number | undefined;
  userIdSelected:any
  userService:UserInfoService=inject(UserInfoService)
  activeRoute:ActivatedRoute=inject(ActivatedRoute)
  router:Router=inject(Router)

  ngOnInit(){
    // this.userId=this.activeRoute.snapshot.params['id']
    // this.userId=Number(this.activeRoute.snapshot.paramMap.get('id'))
    // this.activeRoute.params.subscribe((data)=>{
    //   this.userId=Number(data['id'])
    //   this.userIdSelected=this.userService.userInfo.find(userInfo=> userInfo.id === this.userId)
    // })
    this.activeRoute.paramMap.subscribe((data)=>{
      this.userId=Number(data.get('id'))
      this.userIdSelected=this.userService.userInfo.find(userInfo=> userInfo.id === this.userId)
    })
  }
}
