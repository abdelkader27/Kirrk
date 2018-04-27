
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { UserAPI } from './userAPI.service';
import { SignInVM } from '../viewModels/signInVM';
import { UserVM } from '../viewModels/userVM';
import { UsersVM } from '../viewModels/usersVM';
import { EmailVM } from '../viewModels/emailVM';

describe('UserAPI service', () => {
  let userAPISpy: UserAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    userAPISpy = TestBed.get(UserAPI);
  });
  it('UserAPI service: should signIn', fakeAsync(() => {
    const signInApi = '/api/user/signIn';
    spy = spyOn(userAPISpy, 'signIn').and.callThrough();
    userAPISpy.signIn(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAPISpy._dataService, 'get').and.callThrough();
    userAPISpy.signIn(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${signInApi}`,
      {
      signIn: JSON.stringify(null)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAPI service: should get', fakeAsync(() => {
    const getApi = '/api/user/get';
    spy = spyOn(userAPISpy, 'get').and.callThrough();
    userAPISpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(userAPISpy._dataService, 'get').and.callThrough();
    userAPISpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      idUser: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAPI service: should update', fakeAsync(() => {
    const updateApi = '/api/user/update';
    spy = spyOn(userAPISpy, 'update').and.callThrough();
    userAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAPISpy._dataService, 'put').and.callThrough();
    userAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      user: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAPI service: should list', fakeAsync(() => {
    const listApi = '/api/user/list';
    spy = spyOn(userAPISpy, 'list').and.callThrough();
    userAPISpy.list(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(userAPISpy._dataService, 'get').and.callThrough();
    userAPISpy.list(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('UserAPI service: should checkEmail', fakeAsync(() => {
    const checkEmailApi = '/api/user/checkEmail';
    spy = spyOn(userAPISpy, 'checkEmail').and.callThrough();
    userAPISpy.checkEmail(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(userAPISpy._dataService, 'get').and.callThrough();
    userAPISpy.checkEmail(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${checkEmailApi}`,
      {
      email: JSON.stringify(null)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
