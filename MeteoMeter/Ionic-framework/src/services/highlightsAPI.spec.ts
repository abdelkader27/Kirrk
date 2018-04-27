
import { Observable } from 'rxjs';
import { fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { DataServiceMock } from '../../test-config/mocks/dataServiceMock';
import { DataService } from './data.service';
import { HighlightsAPI } from './highlightsAPI.service';
import { TopPostsVM } from '../viewModels/topPostsVM';
import { BestContributorVM } from '../viewModels/bestContributorVM';
import { ReportVM } from '../viewModels/reportVM';

describe('HighlightsAPI service', () => {
  let highlightsAPISpy: HighlightsAPI;
  let spy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HighlightsAPI,
        { provide: DataService, useClass: DataServiceMock }
      ]
    });
    highlightsAPISpy = TestBed.get(HighlightsAPI);
  });
  it('HighlightsAPI service: should getTopPosts', fakeAsync(() => {
    const getTopPostsApi = '/api/highlights/getTopPosts';
    spy = spyOn(highlightsAPISpy, 'getTopPosts').and.callThrough();
    highlightsAPISpy.getTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAPISpy._dataService, 'get').and.callThrough();
    highlightsAPISpy.getTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getTopPostsApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('HighlightsAPI service: should getBestContributor', fakeAsync(() => {
    const getBestContributorApi = '/api/highlights/getBestContributor';
    spy = spyOn(highlightsAPISpy, 'getBestContributor').and.callThrough();
    highlightsAPISpy.getBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAPISpy._dataService, 'get').and.callThrough();
    highlightsAPISpy.getBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getBestContributorApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

  it('HighlightsAPI service: should getBestIdea', fakeAsync(() => {
    const getBestIdeaApi = '/api/highlights/getBestIdea';
    spy = spyOn(highlightsAPISpy, 'getBestIdea').and.callThrough();
    highlightsAPISpy.getBestIdea(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(highlightsAPISpy._dataService, 'get').and.callThrough();
    highlightsAPISpy.getBestIdea(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      `${getBestIdeaApi}`,
      {
      }
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result instanceof Observable).toBeTruthy();
  }));

});
