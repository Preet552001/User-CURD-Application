import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserApiService } from './user-api.service';

describe('User Api Service', () => {
  let userApiService: UserApiService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    userApiService = TestBed.inject(UserApiService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userApiService).toBeTruthy();
  });

  it('should get all users from server', () => {
    const testData = [
        {
          id: 1,
          firstName: 'user1',
          lastName: 'user1',
          email: 'user1@user1',
          birthDate: '12-12-2022',
          gender: 'male',
          address: {
            id: 1,
            address: 'address',
            city: 'city',
            state: 'state',
            pincode: 'pincode',
          },
        },
        {
            id: 2,
            firstName: 'user2',
            lastName: 'user2',
            email: 'user2@user2',
            birthDate: '01-06-2023',
            gender: 'female',
            address: {
              id: 2,
              address: 'address',
              city: 'city',
              state: 'state',
              pincode: 'pincode',
            },
        }
      ];
    userApiService.userGetApi().subscribe((data: any) => {
        expect(data).toEqual(testData); 
      });
      const mockReq = testingController.expectOne('http://localhost:8080/user');
      expect(mockReq.request.method).toEqual('GET');
      mockReq.flush(testData);
  });

  it('should send user data to the server', () => {
    const testData = 
        {
          id: 1,
          firstName: 'user1',
          lastName: 'user1',
          email: 'user1@user1',
          birthDate: '12-12-2022',
          gender: 'male',
          address: {
            id: 1,
            address: 'address',
            city: 'city',
            state: 'state',
            pincode: 'pincode',
          },
        };
    userApiService.userPostApi(testData).subscribe((data: any) => {
        expect(data).toEqual(testData); 
      });
      const mockReq = testingController.expectOne('http://localhost:8080/user');
      expect(mockReq.request.method).toEqual('POST');
      expect(mockReq.request.body).toEqual(testData);
      mockReq.flush(testData);
  });

  it('should updated user data to the server', () => {
    const testData = 
        {
          id: 1,
          firstName: 'user1',
          lastName: 'user1',
          email: 'user1@user1',
          birthDate: '12-12-2022',
          gender: 'male',
          address: {
            id: 1,
            address: 'address',
            city: 'city',
            state: 'state',
            pincode: 'pincode',
          },
        };
    userApiService.userPutApi(testData).subscribe((data: any) => {
        expect(data).toEqual(testData); 
      });
      const mockReq = testingController.expectOne('http://localhost:8080/user');
      expect(mockReq.request.method).toEqual('PUT');
      expect(mockReq.request.body).toEqual(testData);
      mockReq.flush(testData);
  });

  it('should delete user from the server', () => {
    const testData = 
        {
          id: 1,
          firstName: 'user1',
          lastName: 'user1',
          email: 'user1@user1',
          birthDate: '12-12-2022',
          gender: 'male',
          address: {
            id: 1,
            address: 'address',
            city: 'city',
            state: 'state',
            pincode: 'pincode',
          },
        };
    userApiService.userDeleteApi(testData.id).subscribe((data: any) => {
        expect(data).toBeTruthy();
      });
      const mockReq = testingController.expectOne(`http://localhost:8080/user/${testData.id}`);
      expect(mockReq.request.method).toEqual('DELETE');
      mockReq.flush(testData);
  });


  afterEach(() => {
    testingController.verify(); 
  });
});
