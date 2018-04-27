
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
import { ManageGroupsEditGroupModal } from "./manageGroups-editGroupModal";
import { GroupVM } from '../../../viewModels/groupVM';
import { IdeaVM } from '../../../viewModels/ideaVM';
import { UserVM } from '../../../viewModels/userVM';
import { CardVM } from '../../../viewModels/cardVM';
import { GroupAPI } from '../../../services/groupAPI.service';
import { GroupAPIMock } from '../../../../test-config/mocks/groupAPIMock';
describe('ManageGroupsEditGroupModal Component', () => {
  let fixture: ComponentFixture<ManageGroupsEditGroupModal>;
  let component: ManageGroupsEditGroupModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsEditGroupModal
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
    fixture = TestBed.createComponent(ManageGroupsEditGroupModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsEditGroupModal Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsEditGroupModal).toBeTruthy();
  }));

  it('ManageGroupsEditGroupModal Component: should navigate to language page', fakeAsync(() => {
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
  it('ManageGroupsEditGroupModal Component - onUpdateGroup: should use groupAPI service to UpdateGroup', fakeAsync(() => {
    var group = null;
    spy = spyOn(component, 'onUpdateGroup').and.callThrough();
    component.onUpdateGroup(
    group
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    group
    );
    spy = spyOn(component._groupAPI, 'update').and.callThrough();
    component.onUpdateGroup(
    group
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    group
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsEditGroupModal Component - onCancel: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCancel').and.callThrough();
    component.onCancel();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
