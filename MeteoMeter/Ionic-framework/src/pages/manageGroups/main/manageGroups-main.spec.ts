
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
import { ManageGroupsMain } from "./manageGroups-main";
import { GroupsVM } from '../../../viewModels/groupsVM';
import { IdeasVM } from '../../../viewModels/ideasVM';
import { UsersVM } from '../../../viewModels/usersVM';
import { CardsVM } from '../../../viewModels/cardsVM';
import { GroupAPI } from '../../../services/groupAPI.service';
import { GroupAPIMock } from '../../../../test-config/mocks/groupAPIMock';
describe('ManageGroupsMain Component', () => {
  let fixture: ComponentFixture<ManageGroupsMain>;
  let component: ManageGroupsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: GroupAPI, useClass: GroupAPIMock },
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
    fixture = TestBed.createComponent(ManageGroupsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsMain).toBeTruthy();
  }));

  it('ManageGroupsMain Component: should navigate to language page', fakeAsync(() => {
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
  it('ManageGroupsMain Component - onGetGroups: should use groupAPI service to GetGroups', fakeAsync(() => {
    var idUser = 0;
    spy = spyOn(component, 'onGetGroups').and.callThrough();
    component.onGetGroups(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    spy = spyOn(component._groupAPI, 'list').and.callThrough();
    component.onGetGroups(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsMain Component - onToCreateGroup: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onToCreateGroup').and.callThrough();
    component.onToCreateGroup();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsMain Component - onToGroupDetails: should navigate to manageGroups-groupDetails page', fakeAsync(() => {
    spy = spyOn(component, 'onToGroupDetails').and.callThrough();
    component.onToGroupDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToGroupDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('manageGroups-groupDetails');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('ManageGroupsMain Component - onDelete: should use groupAPI service to Delete', fakeAsync(() => {
    var idGroup = 0;
    spy = spyOn(component, 'onDelete').and.callThrough();
    component.onDelete(
    idGroup
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idGroup
    );
    spy = spyOn(component._groupAPI, 'delete').and.callThrough();
    component.onDelete(
    idGroup
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idGroup
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsMain Component - onToEditGroup: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onToEditGroup').and.callThrough();
    component.onToEditGroup();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
