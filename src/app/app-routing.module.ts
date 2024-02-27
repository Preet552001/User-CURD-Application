import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routing/home/home.component';
import { AboutComponent } from './routing/about/about.component';
import { UserComponent } from './routing/user/user.component';
import { UserCardComponent } from './routing/user/user-card/user-card.component';
import { LoginComponent } from './routing/login/login.component';
import { canActivate,canActivateChilde, resolve } from './guard/auth.guard';
import { UserFormComponent } from './routing/user-form/user-form.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path: 'userForm', component: UserFormComponent},
  {path: 'chart', component: ChartsComponent},
  // { path: 'user', component: UserComponent, resolve: {users: resolve} },
  // {path:'user/:id', component:UserCardComponent},
  // { path: 'user', canActivateChild:[canActivateChilde],children:[
  //   { path: ':id', component:UserCardComponent}
  // ]},
  {path: 'user', canActivate:[canActivate], loadChildren:()=>import('./userdata/userdata.module').then(mod=>mod.UserdataModule)},
  // {path:'admin', loadChildren:()=>import('./admin/admin-routing.module').then(mod=>mod.AdminRoutingModule)},
  {path:'login', component:LoginComponent, canDeactivate:[(com:LoginComponent)=>{return com.canExit()}]},
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash:true})],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  // imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  // imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'top'})],
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]
})
export class AppRoutingModule { }
