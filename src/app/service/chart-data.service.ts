import { Injectable } from '@angular/core';
import { GenderData } from '../interface/gender';
import { BirthdayData } from '../interface/birthday';
import { BehaviorSubject } from 'rxjs';
import{UserApiService} from '../service/user-api.service'


@Injectable({
  providedIn: 'root',
})
export class ChartDataService {
  constructor(private userApi:UserApiService) {}

  genderVal$: BehaviorSubject<GenderData[]> = new BehaviorSubject([]);
  birthdayMonth$: BehaviorSubject<BirthdayData[]> = new BehaviorSubject([]);
  genderVal: GenderData[]
  birthdayMonth:BirthdayData[]
  setData(){
    this.genderVal = [
      { gender: 'male', data: 0, bdColor: '#01A6EA' },
      { gender: 'female', data: 0, bdColor: '#FFB1CB' },
    ];
    this.birthdayMonth = [
      {
        month: 'JAN',
        data: 0,
      },
      {
        month: 'FEB',
        data: 0,
      },
      {
        month: 'MAR',
        data: 0,
      },
      {
        month: 'APR',
        data: 0,
      },
      {
        month: 'MAY',
        data: 0,
      },
      {
        month: 'JUN',
        data: 0,
      },
      {
        month: 'JUL',
        data: 0,
      },
      {
        month: 'AUG',
        data: 0,
      },
      {
        month: 'SEP',
        data: 0,
      },
      {
        month: 'OCT',
        data: 0,
      },
      {
        month: 'NOV',
        data: 0,
      },
      {
        month: 'DEC',
        data: 0,
      },
    ];
    
    this.userApi.userGetApi().subscribe((data)=>{
      data.forEach((e)=>{
        if(e.gender==="male"){
          this.genderVal[0].data++
        }else{
          this.genderVal[1].data++
        }
        // console.log(this.genderVal)
        this.genderVal$.next(this.genderVal);
      })
      
      data.forEach((e)=>{
        if(new Date(`${e.birthDate}`).getMonth()===0){
          this.birthdayMonth[0].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===1){
          this.birthdayMonth[1].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===2){
          this.birthdayMonth[2].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===3){
          this.birthdayMonth[3].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===4){
          this.birthdayMonth[4].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===5){
          this.birthdayMonth[5].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===6){
          this.birthdayMonth[6].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===7){
          this.birthdayMonth[7].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===8){
          this.birthdayMonth[8].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===9){
          this.birthdayMonth[9].data++
        }else if(new Date(`${e.birthDate}`).getMonth()===10){
          this.birthdayMonth[10].data++
        }else {
          this.birthdayMonth[11].data++
        }
      })
      // console.log(this.birthdayMonth)
      this.birthdayMonth$.next(this.birthdayMonth)
    })
  }  
}
