import {AbstractControl,AsyncValidatorFn,ValidationErrors,
  } from '@angular/forms';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  import { pincode } from './pin.service';
  
  export class PincodeValidator {
    static createValidator(pinService: pincode): AsyncValidatorFn {
      return (control: AbstractControl): Observable<ValidationErrors> => {
        return pinService.pin_finder(control.value)
          .pipe(
            map((result) =>{
              if(result[0].Status==='Error'){
                return { invaledPincode: true }
              }else{
              
                return null 
              } }
            )
          );
      };
    }
  }