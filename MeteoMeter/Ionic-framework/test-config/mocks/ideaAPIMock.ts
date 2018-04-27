
import { Observable } from 'rxjs';
import { IdeasVM } from '../../src/viewModels/ideasVM';
import { IdeaVM } from '../../src/viewModels/ideaVM';
export class IdeaAPIMock {
    public list(
    ): Observable<IdeasVM> {
      return Observable.of();
    }

    public delete(
        idIdeaParam: number
    ): Observable<any> {
      return Observable.of();
    }

    public update(
        ideaParam: IdeaVM
    ): Observable<any> {
      return Observable.of();
    }

    public create(
        ideaParam: IdeaVM
    ): Observable<any> {
      return Observable.of();
    }

}
