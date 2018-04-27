
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
import { ManageGroupsCreateGroupModal } from "./manageGroups-createGroupModal";
import { GroupVM } from '../../../viewModels/groupVM';
import { IdeaVM } from '../../../viewModels/ideaVM';
import { GroupAPI } from '../../../services/groupAPI.service';
import { GroupAPIMock } from '../../../../test-config/mocks/groupAPIMock';
describe('ManageGroupsCreateGroupModal Component', () => {
  let fixture: ComponentFixture<ManageGroupsCreateGroupModal>;
  let component: ManageGroupsCreateGroupModal;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        ManageGroupsCreateGroupModal
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
    fixture = TestBed.createComponent(ManageGroupsCreateGroupModal);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('ManageGroupsCreateGroupModal Component: should be created', fakeAsync(() => {
    expect(component instanceof ManageGroupsCreateGroupModal).toBeTruthy();
  }));

  it('ManageGroupsCreateGroupModal Component: should navigate to language page', fakeAsync(() => {
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
  it('ManageGroupsCreateGroupModal Component - onSave: should use groupAPI service to Save', fakeAsync(() => {
    var group = null;
    spy = spyOn(component, 'onSave').and.callThrough();
    component.onSave(
    group
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    group
    );
    spy = spyOn(component._groupAPI, 'create').and.callThrough();
    component.onSave(
    group
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    group
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('ManageGroupsCreateGroupModal Component - onCancel: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCancel').and.callThrough();
    component.onCancel();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('ManageGroupsCreateGroupModal Component - onToGroupDetails: should navigate to manageGroups-groupDetails page', fakeAsync(() => {
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

});
