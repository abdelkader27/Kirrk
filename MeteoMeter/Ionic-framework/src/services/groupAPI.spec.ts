
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { GroupAPI } from './groupAPI.service';
import { GroupVM } from '../viewModels/groupVM';
import { GroupsVM } from '../viewModels/groupsVM';
import { UserVM } from '../viewModels/userVM';

describe('GroupAPI service', () => {
  let groupAPISpy: GroupAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    groupAPISpy = TestBed.get(GroupAPI);
  });
  it('GroupAPI service: should create', fakeAsync(() => {
    const createApi = '/api/group/create';
    spy = spyOn(groupAPISpy, 'create').and.callThrough();
    groupAPISpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(groupAPISpy._dataService, 'post').and.callThrough();
    groupAPISpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      group: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should update', fakeAsync(() => {
    const updateApi = '/api/group/update';
    spy = spyOn(groupAPISpy, 'update').and.callThrough();
    groupAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(groupAPISpy._dataService, 'put').and.callThrough();
    groupAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      group: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should delete', fakeAsync(() => {
    const deleteApi = '/api/group/delete';
    spy = spyOn(groupAPISpy, 'delete').and.callThrough();
    groupAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(groupAPISpy._dataService, 'delete').and.callThrough();
    groupAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${deleteApi}`,
      {
      idGroup: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should listMyGroups', fakeAsync(() => {
    const listMyGroupsApi = '/api/group/listMyGroups';
    spy = spyOn(groupAPISpy, 'listMyGroups').and.callThrough();
    groupAPISpy.listMyGroups(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(groupAPISpy._dataService, 'get').and.callThrough();
    groupAPISpy.listMyGroups(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listMyGroupsApi}`,
      {
      idUser: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should list', fakeAsync(() => {
    const listApi = '/api/group/list';
    spy = spyOn(groupAPISpy, 'list').and.callThrough();
    groupAPISpy.list(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(groupAPISpy._dataService, 'get').and.callThrough();
    groupAPISpy.list(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${listApi}`,
      {
      idUser: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should addMember', fakeAsync(() => {
    const addMemberApi = '/api/group/addMember';
    spy = spyOn(groupAPISpy, 'addMember').and.callThrough();
    groupAPISpy.addMember(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null,
      0
    );
    spy = spyOn(groupAPISpy._dataService, 'put').and.callThrough();
    groupAPISpy.addMember(
      null,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${addMemberApi}`,
      {
      user: null,
      id: 0
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('GroupAPI service: should removeMember', fakeAsync(() => {
    const removeMemberApi = '/api/group/removeMember';
    spy = spyOn(groupAPISpy, 'removeMember').and.callThrough();
    groupAPISpy.removeMember(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0,
      0
    );
    spy = spyOn(groupAPISpy._dataService, 'put').and.callThrough();
    groupAPISpy.removeMember(
      0,
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${removeMemberApi}`,
      {
      id: 0,
      idUser: 0
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
