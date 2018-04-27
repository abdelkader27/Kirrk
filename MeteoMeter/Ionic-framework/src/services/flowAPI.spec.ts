
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { FlowAPI } from './flowAPI.service';
import { CardsVM } from '../viewModels/cardsVM';

describe('FlowAPI service', () => {
  let flowAPISpy: FlowAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FlowAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    flowAPISpy = TestBed.get(FlowAPI);
  });
  it('FlowAPI service: should list', fakeAsync(() => {
    const listApi = '/api/flow/list';
    spy = spyOn(flowAPISpy, 'list').and.callThrough();
    flowAPISpy.list(
      0
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      0
    );
    spy = spyOn(flowAPISpy._dataService, 'get').and.callThrough();
    flowAPISpy.list(
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

});
