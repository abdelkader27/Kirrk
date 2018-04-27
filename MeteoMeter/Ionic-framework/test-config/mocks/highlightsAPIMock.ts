
import { Observable } from 'rxjs';
import { TopPostsVM } from '../../src/viewModels/topPostsVM';
import { BestContributorVM } from '../../src/viewModels/bestContributorVM';
import { ReportVM } from '../../src/viewModels/reportVM';
export class HighlightsAPIMock {
    public getTopPosts(
    ): Observable<TopPostsVM> {
      return Observable.of();
    }

    public getBestContributor(
    ): Observable<BestContributorVM> {
      return Observable.of();
    }

    public getBestIdea(
    ): Observable<ReportVM> {
      return Observable.of();
    }

}
