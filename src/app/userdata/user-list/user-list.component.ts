import { AfterViewInit, Component, Inject, inject, ViewChild } from '@angular/core';
import { UserService } from '../../service/user.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DialogContentExampleDialog } from './edit-dialog/dialog.component';
import {CloseDialogComponent} from './delete-dialog/close-dialog.component'
// import {UserApiService} from './userAPI.service';
import{UserApiService } from '../../service/user-api.service'

// import { UserApiService } from './userAPI.service';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserDataTable implements AfterViewInit {
  // userinfo: UserService = inject(UserService);
  userApi: UserApiService = inject(UserApiService);
  
  displayedColumns: string[] = [ 'id','firstName','lastName','email'];
  columnsToDisplay = [...this.displayedColumns, 'gender','expand'];

  dataSource = new MatTableDataSource<any>()
  constructor(private http: HttpClient, public dialog: MatDialog, 
    // private userDataApiCall:UserApiService
    ){
    // this.dataFetch()
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    // this.dataFetch()
    // this.userDataApiCall.userInfoApi().subscribe((data)=>{
    //   console.log(data)
    // })
    // this.dataSet()
    this.dataSet()
  }

  ngAfterViewInit() {
    // this.dataSource=new MatTableDataSource(this.data)
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  // dataFetch(){
  //   this.http.get<any>(`https://dummyjson.com/users`).subscribe((val)=>{
  //       // console.log(val.users[0].id)  
  //       this.dataSource.data = val.users;
  //       // console.log(this.dataSource)
  //       // this.data=val.users
  //      })
   
  // }
  // dataSource = new MatTableDataSource(this.data)

  // constructor() {}

  dataSet(){
    this.userApi.userGetApi().subscribe((data)=>{
      this.dataSource.data=data
    })
  }
  // dataSet(){
  //   if(!localStorage.getItem("userData")){
  //   //   this.userinfoApi.userInfoApi().subscribe((val)=>{
    //     // console.log(data)
    //     let userData=val

    //     this.http.get<any>('http://localhost:8080/users').subscribe((e)=>{
    //       // userData=e;
    //       // console.log((val.users).concat(e))
    //       localStorage.setItem("userData",JSON.stringify((val.users).concat(e)))
    //       this.dataSource.data=(val.users).concat(e);
    //     })


        
    //   })


      
    // }
    // else{
    //   this.dataSource.data=JSON.parse(localStorage.getItem("userData"))
    // }
    
  // }


  openDialog(val) {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      data:{user:val},
      // height:'100px',
      // width:'100px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      // this.dataSet()
    });
  }
  openCloseDialog(val){
    const dialogRef = this.dialog.open(CloseDialogComponent,{
      data:{user:val},
      // height:'100px',
      // width:'100px', 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(`Dialog result: ${result}`);
      // this.dataSet()
      this.dataSet()
    });
  }

  filter(event: Event, column: string) {
    const input = (event.target as HTMLInputElement).value;
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const columnValue = data[column].toString().toLowerCase();
      // console.log(columnValue);
      return columnValue.includes(filter.trim().toLowerCase());
    };
    this.dataSource.filter = input;
  }
  onOptionsFilter(event: Event, column: string) {
    // console.log(event)
    const input: string = String(event);
    // console.log(input,column)
    if(input==="All"){
      this.dataSource.filter='';
    }
    else{
      this.dataSource.filterPredicate = (data: any, filter: string) => {
        const columnValue = this.capitalizeFirstLetter(data[column].toString());
        // console.log(columnValue);
        return columnValue.includes(filter.trim());
      };
      this.dataSource.filter = input;
    }
  }

  capitalizeFirstLetter(stringvalue) {
    return stringvalue.charAt(0).toUpperCase() + stringvalue.slice(1);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
