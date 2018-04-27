
import { Observable } from 'rxjs';
import { GroupVM } from '../../src/viewModels/groupVM';
import { GroupsVM } from '../../src/viewModels/groupsVM';
import { UserVM } from '../../src/viewModels/userVM';
export class GroupAPIMock {
    public create(
        groupParam: GroupVM
    ): Observable<any> {
      return Observable.of();
    }

    public update(
        groupParam: GroupVM
    ): Observable<any> {
      return Observable.of();
    }

    public delete(
        idGroupParam: number
    ): Observable<any> {
      return Observable.of();
    }

    public listMyGroups(
        idUserParam: number
    ): Observable<GroupsVM> {
      return Observable.of();
    }

    public list(
        idUserParam: number
    ): Observable<GroupsVM> {
      return Observable.of();
    }

    public addMember(
        userParam: UserVM,
        idParam: number
    ): Observable<any> {
      return Observable.of();
    }

    public removeMember(
        idParam: number,
        idUserParam: number
    ): Observable<any> {
      return Observable.of();
    }

}
