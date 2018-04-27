
import { Observable } from 'rxjs';
import { SignInVM } from '../../src/viewModels/signInVM';
import { UserVM } from '../../src/viewModels/userVM';
import { UsersVM } from '../../src/viewModels/usersVM';
import { EmailVM } from '../../src/viewModels/emailVM';
export class UserAPIMock {
    public signIn(
        signInParam: SignInVM
    ): Observable<any> {
      return Observable.of();
    }

    public get(
        idUserParam: number
    ): Observable<UserVM> {
      return Observable.of();
    }

    public update(
        userParam: UserVM
    ): Observable<any> {
      return Observable.of();
    }

    public list(
    ): Observable<UsersVM> {
      return Observable.of();
    }

    public checkEmail(
        emailParam: EmailVM
    ): Observable<any> {
      return Observable.of();
    }

}
