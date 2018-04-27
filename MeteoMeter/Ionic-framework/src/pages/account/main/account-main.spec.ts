
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
import { AccountMain } from "./account-main";
import { UserVM } from '../../../viewModels/userVM';
import { CardVM } from '../../../viewModels/cardVM';
import { UserAPI } from '../../../services/userAPI.service';
import { UserAPIMock } from '../../../../test-config/mocks/userAPIMock';
describe('AccountMain Component', () => {
  let fixture: ComponentFixture<AccountMain>;
  let component: AccountMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        AccountMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
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
    fixture = TestBed.createComponent(AccountMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('AccountMain Component: should be created', fakeAsync(() => {
    expect(component instanceof AccountMain).toBeTruthy();
  }));

  it('AccountMain Component: should navigate to language page', fakeAsync(() => {
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
  it('AccountMain Component - onGetUser: should use userAPI service to GetUser', fakeAsync(() => {
    var idUser = 0;
    spy = spyOn(component, 'onGetUser').and.callThrough();
    component.onGetUser(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    spy = spyOn(component._userAPI, 'get').and.callThrough();
    component.onGetUser(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('AccountMain Component - onToEditProfile: should navigate to account-editProfile page', fakeAsync(() => {
    spy = spyOn(component, 'onToEditProfile').and.callThrough();
    component.onToEditProfile();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToEditProfile();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('account-editProfile');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('AccountMain Component - onToManageGroups: should navigate to manageGroups-main page', fakeAsync(() => {
    spy = spyOn(component, 'onToManageGroups').and.callThrough();
    component.onToManageGroups();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToManageGroups();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('manageGroups-main');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('AccountMain Component - onToSettings: should navigate to settings-main page', fakeAsync(() => {
    spy = spyOn(component, 'onToSettings').and.callThrough();
    component.onToSettings();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToSettings();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('settings-main');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('AccountMain Component - onSignOut: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSignOut').and.callThrough();
    component.onSignOut();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
