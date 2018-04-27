
import { IonicModule, NavController, Platform } from 'ionic-angular';
import { NavMock } from '../../../../test-config/mocks/navMock';
import { PlatformMock } from '../../../../test-config/mocks/platformMock';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SplashScreenMock } from '../../../../test-config/mocks/splashScreenMock';
import { StatusBar } from '@ionic-native/status-bar';
import { StatusBarMock } from '../../../../test-config/mocks/statusBarMock';
import { Title } from '@angular/platform-browser';
import { TitleMock } from '../../../../test-config/mocks/titleMock';
import { async, ComponentFixture, fakeAsync, flushMicrotasks, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../../../test-config/mocks/translateServiceMock';
import { LanguagePageModule } from '../../language/language.module';
import { LanguagePage } from '../../language/language';
import { MeteoMeter } from '../../../app/app.component';
import { ManageGroupsAddMemberModal } from "./manageGroups-addMemberModal";
import { UserVM } from '../../../viewModels/userVM';
import { GroupsVM } from '../../../viewModels/groupsVM';
import { IdeasVM } from '../../../viewModels/ideasVM';
import { UsersVM } from '../../../viewModels/usersVM';
import { CardsVM } from '../../../viewModels/cardsVM';
import { GroupAPI } from '../../../services/groupAPI.service';
import { GroupAPIMock } from '../../../../test-config/mocks/groupAPIMock';
import { UserAPI } from '../../../services/userAPI.service';
import { UserAPIMock } from '../../../../test-config/mocks/userAPIMock';
describe('ManageGroupsAddMemberModal Component', () => {
  let fixture: ComponentFixture<ManageGroupsAddMemberModal>;
  let component: ManageGroupsAddMemberModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsAddMemberModal
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: GroupAPI, useClass: GroupAPIMock },
        { provide: UserAPI, useClass: UserAPIMock },
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: NavController, useClass: NavMock },
        { provide: Title, useClass: TitleMock },
      ]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(ManageGroupsAddMemberModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsAddMemberModal Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsAddMemberModal).toBeTruthy();
  }));

  it('ManageGroupsAddMemberModal Component: should navigate to language page', fakeAsync(() => {
    spy = spyOn(component, 'onLanguage').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onLanguage();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(LanguagePage);
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));
  it('ManageGroupsAddMemberModal Component - onSearchUser: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSearchUser').and.callThrough();
    component.onSearchUser();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsAddMemberModal Component - onAddMember: should use groupAPI service to AddMember', fakeAsync(() => {
    var user = null;
    var id = 0;
    spy = spyOn(component, 'onAddMember').and.callThrough();
    component.onAddMember(
    user,
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    user,
    id
    );
    spy = spyOn(component._groupAPI, 'addMember').and.callThrough();
    component.onAddMember(
    user,
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    user,
    id
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsAddMemberModal Component - onGetMembers: should use userAPI service to GetMembers', fakeAsync(() => {
    spy = spyOn(component, 'onGetMembers').and.callThrough();
    component.onGetMembers(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._userAPI, 'list').and.callThrough();
    component.onGetMembers(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
