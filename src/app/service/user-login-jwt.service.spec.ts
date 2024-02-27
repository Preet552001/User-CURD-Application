import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { UserLoginJwtService } from './user-login-jwt.service';

describe('User JWT Login Api Service', () => {
  let userLoginJwtApi: UserLoginJwtService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    userLoginJwtApi = TestBed.inject(UserLoginJwtService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(userLoginJwtApi).toBeTruthy();
  });

  it('should get JWT from Api', () => {
    const testData = 
        {
            "userName":'user',
            "password":12345
        };
      userLoginJwtApi.userLoginJwtApi('user',12345).subscribe((data: any) => {
        expect(data).toEqual(testData); 
      });
      const mockReq = testingController.expectOne('http://localhost:8080/jwt/login');
      expect(mockReq.request.method).toEqual('POST');
      mockReq.flush(testData);
  });

  afterEach(() => {
    testingController.verify(); 
  });

});
