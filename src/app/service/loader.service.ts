import { Injectable } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  showLoader = new BehaviorSubject(false);
  currentDataLoader = this.showLoader.asObservable();
  constructor(private router: Router) { }
  routing(){
    this.router.events.subscribe((routerEvent: Event)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader.next(true);
      }
      else if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoader.next(false); 
      }
    })
  }
}
