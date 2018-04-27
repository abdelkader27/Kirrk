
import { LanguagePageModule } from '../pages/language/language.module';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../test-config/mocks/translateServiceMock';
import { ComponentFixture, async, TestBed, fakeAsync, flushMicrotasks } from '@angular/core/testing';
import { IonicModule, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Title } from '@angular/platform-browser';

import { MeteoMeter } from './app.component';
import { TabsMainPageModule } from '../pages/tabs/main/tabs-main.module';
import { TabsMain } from '../pages/tabs/main/tabs-main';
import { PlatformMock } from '../../test-config/mocks/platformMock';
import { StatusBarMock } from '../../test-config/mocks/statusBarMock';
import { SplashScreenMock } from '../../test-config/mocks/splashScreenMock';
import { NavMock } from '../../test-config/mocks/navMock';
import { TitleMock } from '../../test-config/mocks/titleMock';

describe('MeteoMeter Component', () => {
  let fixture: ComponentFixture<MeteoMeter>;
  let component: MeteoMeter;

  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MeteoMeter],
      imports: [
        LanguagePageModule,
        TabsMainPageModule,
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: Platform, useClass: PlatformMock },
        { provide: StatusBar, useClass: StatusBarMock },
        { provide: SplashScreen, useClass: SplashScreenMock },
        { provide: TranslateService, useClass: TranslateServiceMock },
        { provide: NavController, useClass: NavMock },
        { provide: Title, useClass: TitleMock }
      ]
    }).compileComponents();
  }));

  beforeEach(async() => {
    fixture = TestBed.createComponent(MeteoMeter);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('MeteoMeter Component: platform should be ready', fakeAsync(() => {
    spy = spyOn(component._platform, 'ready').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('READY');
    });
  }));

  it('MeteoMeter Component: should set default style statusBar', fakeAsync(() => {
    spy = spyOn(component._statusBar, 'styleDefault').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('MeteoMeter Component: should hide splashscreen', fakeAsync(() => {
    spy = spyOn(component._splashScreen, 'hide').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('MeteoMeter Component: should set navigation root page', fakeAsync(() => {
    spy = spyOn(component._nav, 'setRoot').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
      TabsMain
    );
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toBe(true);
    });
  }));

  it('MeteoMeter Component: should set default language', fakeAsync(() => {
    spy = spyOn(component._translateService, 'setDefaultLang').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('Fr');
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('MeteoMeter Component: should use fr language', fakeAsync(() => {
    spy = spyOn(component._translateService, 'use').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('Fr');
    spy.calls.mostRecent().returnValue.subscribe((result) => {
      expect(result).toEqual('Fr');
    });
  }));

  it('MeteoMeter Component: should translate applicationTitle to test', fakeAsync(() => {
    spy = spyOn(component._translateService, 'get').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('applicationTitle');
    spy.calls.mostRecent().returnValue.subscribe((result) => {
      expect(result).toEqual('test');
    });
  }));

  it('MeteoMeter Component: should set translated title', fakeAsync(() => {
    spy = spyOn(component._title, 'setTitle').and.callThrough();
    var app = new MeteoMeter(
      component._translateService,
      component._platform,
      component._statusBar,
      component._splashScreen,
      component._title
    );
    app._nav = component._nav;
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('test');
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('MeteoMeter Component: should be created', fakeAsync(() => {
    flushMicrotasks();
    expect(component instanceof MeteoMeter).toBeTruthy();
  }));

  it('MeteoMeter Component: should set root on test route', fakeAsync(() => {
    spy = spyOn(component, 'selected').and.callThrough();
    component.selected('test');
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('test');
    spy = spyOn(component._nav, 'setRoot').and.callThrough();
    component.selected('test');
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('test');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toBe(true);
    });
  }));
});
