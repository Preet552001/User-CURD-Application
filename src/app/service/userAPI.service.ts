import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class UserApiService{
    
    constructor(private http:HttpClient){

    }
    userInfoApi(){
      return this.http.get<any>(`https://dummyjson.com/users`)
    }
}
