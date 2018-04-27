
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
import { HighlightsBestContributor } from "./highlights-bestContributor";
import { BestContributorVM } from '../../../viewModels/bestContributorVM';
import { HighlightsAPI } from '../../../services/highlightsAPI.service';
import { HighlightsAPIMock } from '../../../../test-config/mocks/highlightsAPIMock';
describe('HighlightsBestContributor Component', () => {
  let fixture: ComponentFixture<HighlightsBestContributor>;
  let component: HighlightsBestContributor;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        HighlightsBestContributor
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
    fixture = TestBed.createComponent(HighlightsBestContributor);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('HighlightsBestContributor Component: should be created', fakeAsync(() => {
    expect(component instanceof HighlightsBestContributor).toBeTruthy();
  }));

  it('HighlightsBestContributor Component: should navigate to language page', fakeAsync(() => {
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
  it('HighlightsBestContributor Component - onShowContributor: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onShowContributor').and.callThrough();
    component.onShowContributor();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('HighlightsBestContributor Component - onGetBestContributor: should use highlightsAPI service to GetBestContributor', fakeAsync(() => {
    spy = spyOn(component, 'onGetBestContributor').and.callThrough();
    component.onGetBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._highlightsAPI, 'getBestContributor').and.callThrough();
    component.onGetBestContributor(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
