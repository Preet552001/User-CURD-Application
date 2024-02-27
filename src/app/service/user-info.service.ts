import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  constructor() { }

  userInfo=[{'id':1,'name':'user1','message':'Hello From User1'},
            {'id':2,'name':'user2','message':'Hello From User2'},
            {'id':3,'name':'user3','message':'Hello From User3'},
            {'id':4,'name':'user4','message':'Hello From User4'},
           ]

  getAlluserInfo(){
     return new Observable((sub)=>{
      setTimeout(()=>{
        sub.next(this.userInfo)
      },5000)
    })
  }        
}
