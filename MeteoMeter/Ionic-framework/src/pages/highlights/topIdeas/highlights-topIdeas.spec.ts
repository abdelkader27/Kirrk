
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
import { HighlightsTopIdeas } from "./highlights-topIdeas";
import { TopPostsVM } from '../../../viewModels/topPostsVM';
import { HighlightsAPI } from '../../../services/highlightsAPI.service';
import { HighlightsAPIMock } from '../../../../test-config/mocks/highlightsAPIMock';
describe('HighlightsTopIdeas Component', () => {
  let fixture: ComponentFixture<HighlightsTopIdeas>;
  let component: HighlightsTopIdeas;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        HighlightsTopIdeas
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: HighlightsAPI, useClass: HighlightsAPIMock },
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
    fixture = TestBed.createComponent(HighlightsTopIdeas);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('HighlightsTopIdeas Component: should be created', fakeAsync(() => {
    expect(component instanceof HighlightsTopIdeas).toBeTruthy();
  }));

  it('HighlightsTopIdeas Component: should navigate to language page', fakeAsync(() => {
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
  it('HighlightsTopIdeas Component - onShowCard: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowCard').and.callThrough();
    component.onShowCard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('HighlightsTopIdeas Component - onGetTopPosts: should use highlightsAPI service to GetTopPosts', fakeAsync(() => {
    spy = spyOn(component, 'onGetTopPosts').and.callThrough();
    component.onGetTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._highlightsAPI, 'getTopPosts').and.callThrough();
    component.onGetTopPosts(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
