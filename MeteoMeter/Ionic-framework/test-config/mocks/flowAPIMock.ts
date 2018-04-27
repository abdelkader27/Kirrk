
import { Observable } from 'rxjs';
import { CardsVM } from '../../src/viewModels/cardsVM';
export class FlowAPIMock {
    public list(
        idUserParam: number
    ): Observable<CardsVM> {
      return Observable.of();
    }

}
