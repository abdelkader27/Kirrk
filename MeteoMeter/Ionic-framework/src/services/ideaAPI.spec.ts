
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { IdeaAPI } from './ideaAPI.service';
import { IdeasVM } from '../viewModels/ideasVM';
import { IdeaVM } from '../viewModels/ideaVM';

describe('IdeaAPI service', () => {
  let ideaAPISpy: IdeaAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        IdeaAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    ideaAPISpy = TestBed.get(IdeaAPI);
  });
  it('IdeaAPI service: should list', fakeAsync(() => {
    const listApi = '/api/idea/listIdea';
    spy = spyOn(ideaAPISpy, 'list').and.callThrough();
    ideaAPISpy.list(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(ideaAPISpy._dataService, 'get').and.callThrough();
    ideaAPISpy.list(
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

  it('IdeaAPI service: should delete', fakeAsync(() => {
    const deleteApi = '/api/idea/delete';
    spy = spyOn(ideaAPISpy, 'delete').and.callThrough();
    ideaAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(ideaAPISpy._dataService, 'delete').and.callThrough();
    ideaAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${deleteApi}`,
      {
      idIdea: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAPI service: should update', fakeAsync(() => {
    const updateApi = '/api/idea/updateIdea';
    spy = spyOn(ideaAPISpy, 'update').and.callThrough();
    ideaAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(ideaAPISpy._dataService, 'put').and.callThrough();
    ideaAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      idea: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('IdeaAPI service: should create', fakeAsync(() => {
    const createApi = '/api/idea/create';
    spy = spyOn(ideaAPISpy, 'create').and.callThrough();
    ideaAPISpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(ideaAPISpy._dataService, 'post').and.callThrough();
    ideaAPISpy.create(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${createApi}`,
      {
      idea: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
