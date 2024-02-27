import { inject } from "@angular/core"
// import { AuthService } from "../service/auth.service"
import { Router } from "@angular/router"
import { UserInfoService } from "../service/user-info.service"
import { BehaviorSubject } from "rxjs"
import { UserLoginJwtService } from "../service/user-login-jwt.service"
// import { LogginServiceTsService } from "./loggin.service.ts.service"

export const canActivate=()=>{
    const userLogin:UserLoginJwtService = inject(UserLoginJwtService)
    // const authService:AuthService=inject(AuthService)
    // const loggin: LogginServiceTsService = inject(LogginServiceTsService)
    const route:Router=inject(Router)
    // let datatoggle = new BehaviorSubject(false)
    // let currentDatatoggle = datatoggle.asObservable()
    // // isLogged: boolean=false
    // loggin.currentDatatoggle=
    if(String(localStorage.getItem('jwt'))!=='null'){
        userLogin.datatoggle.next(true)        
        return true
    }
    else{
        userLogin.datatoggle.next(false)        
        route.navigate(['/login'])
        return false
    }
    userLogin.currentDatatoggle.subscribe((data)=>{
        if(data){
            // console.log(localStorage.getItem('jwt'))
            // loggin.datatoggle.next(Boolean(localStorage.getItem('isLogged')))
            return true
            
        }else{
            // loggin.datatoggle.next(Boolean(localStorage.getItem('isLogged')))
            route.navigate(['/login'])
            return false
        }
            
    })
    
    
}

export const canActivateChilde=()=>{
   return canActivate() 
}

export const resolve=()=>{
    const userInfo = inject(UserInfoService)
    return userInfo.getAlluserInfo()
}