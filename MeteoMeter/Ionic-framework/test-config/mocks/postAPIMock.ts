
import { Observable } from 'rxjs';
import { PictureVM } from '../../src/viewModels/pictureVM';
import { CardVM } from '../../src/viewModels/cardVM';
import { CardsVM } from '../../src/viewModels/cardsVM';
export class PostAPIMock {
    public uploadPicture(
        pictureParam: PictureVM
    ): Observable<any> {
      return Observable.of();
    }

    public getDefaultPicture(
    ): Observable<PictureVM> {
      return Observable.of();
    }

    public get(
        idParam: number
    ): Observable<CardVM> {
      return Observable.of();
    }

    public getLatestsPostsByUser(
        idUserParam: number
    ): Observable<CardsVM> {
      return Observable.of();
    }

    public update(
        postParam: CardVM
    ): Observable<any> {
      return Observable.of();
    }

    public getTopPostsByUser(
        idUserParam: number
    ): Observable<CardsVM> {
      return Observable.of();
    }

    public delete(
        idParam: number
    ): Observable<any> {
      return Observable.of();
    }

}
