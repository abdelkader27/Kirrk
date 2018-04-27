
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { PostAPI } from './postAPI.service';
import { PictureVM } from '../viewModels/pictureVM';
import { CardVM } from '../viewModels/cardVM';
import { CardsVM } from '../viewModels/cardsVM';

describe('PostAPI service', () => {
  let postAPISpy: PostAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PostAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    postAPISpy = TestBed.get(PostAPI);
  });
  it('PostAPI service: should uploadPicture', fakeAsync(() => {
    const uploadPictureApi = '/api/post/uploadPicture';
    spy = spyOn(postAPISpy, 'uploadPicture').and.callThrough();
    postAPISpy.uploadPicture(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(postAPISpy._dataService, 'post').and.callThrough();
    postAPISpy.uploadPicture(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${uploadPictureApi}`,
      {
      picture: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should getDefaultPicture', fakeAsync(() => {
    const getDefaultPictureApi = '/api/post/getDefaultPicture';
    spy = spyOn(postAPISpy, 'getDefaultPicture').and.callThrough();
    postAPISpy.getDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(postAPISpy._dataService, 'get').and.callThrough();
    postAPISpy.getDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getDefaultPictureApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should get', fakeAsync(() => {
    const getApi = '/api/post/get';
    spy = spyOn(postAPISpy, 'get').and.callThrough();
    postAPISpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postAPISpy._dataService, 'get').and.callThrough();
    postAPISpy.get(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getApi}`,
      {
      id: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should getLatestsPostsByUser', fakeAsync(() => {
    const getLatestsPostsByUserApi = '/api/post/listByUser';
    spy = spyOn(postAPISpy, 'getLatestsPostsByUser').and.callThrough();
    postAPISpy.getLatestsPostsByUser(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postAPISpy._dataService, 'get').and.callThrough();
    postAPISpy.getLatestsPostsByUser(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getLatestsPostsByUserApi}`,
      {
      idUser: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should update', fakeAsync(() => {
    const updateApi = '/api/post/update';
    spy = spyOn(postAPISpy, 'update').and.callThrough();
    postAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      null
    );
    spy = spyOn(postAPISpy._dataService, 'put').and.callThrough();
    postAPISpy.update(
      null
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${updateApi}`,
      {
      post: null
      },
      {}
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should getTopPostsByUser', fakeAsync(() => {
    const getTopPostsByUserApi = '/api/post/listTopByUser';
    spy = spyOn(postAPISpy, 'getTopPostsByUser').and.callThrough();
    postAPISpy.getTopPostsByUser(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postAPISpy._dataService, 'get').and.callThrough();
    postAPISpy.getTopPostsByUser(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getTopPostsByUserApi}`,
      {
      idUser: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('PostAPI service: should delete', fakeAsync(() => {
    const deleteApi = '/api/post/delete';
    spy = spyOn(postAPISpy, 'delete').and.callThrough();
    postAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(postAPISpy._dataService, 'delete').and.callThrough();
    postAPISpy.delete(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${deleteApi}`,
      {
      id: JSON.stringify(0)
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
