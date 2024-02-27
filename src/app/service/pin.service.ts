import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class pincode{
    
    constructor(private http:HttpClient){

    }
    pin_finder(val){
       return this.http.get<any>(`https://api.postalpincode.in/pincode/${val}`)
    }
    
}