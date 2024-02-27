import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { userDetai } from '../interface/userDetai';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private http: HttpClient) {}
  // ;
  // headers = new HttpHeaders({
  //   Authorization: `Bearer ${localStorage.getItem('jwt')}` 
  // });

  userGetApi() {
    return this.http.get<userDetai[]>('http://localhost:8080/user'
    // , { headers: this.headers }
    );
  }

  userPostApi(userdata) {
    return this.http.post<userDetai>(`http://localhost:8080/user`, userdata
    // , { headers: this.headers }
    );
  }

  userPutApi(updatedUserData) {
    return this.http.put<userDetai>('http://localhost:8080/user', updatedUserData
    // , { headers: this.headers }).pipe(
    //   catchError(error => {
    //     console.error('PUT Request Error:', error);
    //     throw error; // rethrow the error
    //   })
    );
  }

  userDeleteApi(id) {
    return this.http.delete(`http://localhost:8080/user/${id}`
    // , { headers: this.headers }
    );
  }
}
