
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
import { FlowMain } from "./flow-main";
import { GroupsVM } from '../../../viewModels/groupsVM';
import { IdeasVM } from '../../../viewModels/ideasVM';
import { UsersVM } from '../../../viewModels/usersVM';
import { CardsVM } from '../../../viewModels/cardsVM';
import { FlowAPI } from '../../../services/flowAPI.service';
import { FlowAPIMock } from '../../../../test-config/mocks/flowAPIMock';
describe('FlowMain Component', () => {
  let fixture: ComponentFixture<FlowMain>;
  let component: FlowMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        FlowMain
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: FlowAPI, useClass: FlowAPIMock },
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
    fixture = TestBed.createComponent(FlowMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('FlowMain Component: should be created', fakeAsync(() => {
    expect(component instanceof FlowMain).toBeTruthy();
  }));

  it('FlowMain Component: should navigate to language page', fakeAsync(() => {
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
  it('FlowMain Component - onNextCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onNextCard').and.callThrough();
    component.onNextCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onPreviousCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onPreviousCard').and.callThrough();
    component.onPreviousCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onDiscard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onDiscard').and.callThrough();
    component.onDiscard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('FlowMain Component - onGetFlowCards: should use flowAPI service to GetFlowCards', fakeAsync(() => {
    var idUser = 0;
    spy = spyOn(component, 'onGetFlowCards').and.callThrough();
    component.onGetFlowCards(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    spy = spyOn(component._flowAPI, 'list').and.callThrough();
    component.onGetFlowCards(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('FlowMain Component - onSwipeCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onSwipeCard').and.callThrough();
    component.onSwipeCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

});
