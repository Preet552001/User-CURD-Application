import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:UserInfoService=inject(UserInfoService)
  allUser:any
  serach:any
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  ngOnInit(){
    
    this.serach=this.activeRoute.snapshot.queryParamMap.get('serach');
    // console.log(this.serach)

    if(this.serach===undefined || this.serach=== '' || this.serach===null){
      // this.users.getAlluserInfo().subscribe((data: any)=>{
      //   this.allUser=data
      // })
      this.allUser=this.activeRoute.snapshot.data['users']
    }else{
      this.allUser=this.users.userInfo.filter(data=>data.name.includes(this.serach))
    }
  }
}
