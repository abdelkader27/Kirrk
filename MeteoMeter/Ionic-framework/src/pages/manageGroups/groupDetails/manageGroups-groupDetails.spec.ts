
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
import { ManageGroupsGroupDetails } from "./manageGroups-groupDetails";
import { GroupAPI } from '../../../services/groupAPI.service';
import { GroupAPIMock } from '../../../../test-config/mocks/groupAPIMock';
describe('ManageGroupsGroupDetails Component', () => {
  let fixture: ComponentFixture<ManageGroupsGroupDetails>;
  let component: ManageGroupsGroupDetails;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsGroupDetails
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
    fixture = TestBed.createComponent(ManageGroupsGroupDetails);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsGroupDetails Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsGroupDetails).toBeTruthy();
  }));

  it('ManageGroupsGroupDetails Component: should navigate to language page', fakeAsync(() => {
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
  it('ManageGroupsGroupDetails Component - onToAddMemberModal: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onToAddMemberModal').and.callThrough();
    component.onToAddMemberModal();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsGroupDetails Component - onRemoveMember: should use groupAPI service to RemoveMember', fakeAsync(() => {
    var id = 0;
    var idUser = 0;
    spy = spyOn(component, 'onRemoveMember').and.callThrough();
    component.onRemoveMember(
    id,
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id,
    idUser
    );
    spy = spyOn(component._groupAPI, 'removeMember').and.callThrough();
    component.onRemoveMember(
    id,
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id,
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
