
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
import { PostsTopPosts } from "./posts-topPosts";
import { CardsVM } from '../../../viewModels/cardsVM';
import { PostAPI } from '../../../services/postAPI.service';
import { PostAPIMock } from '../../../../test-config/mocks/postAPIMock';
describe('PostsTopPosts Component', () => {
  let fixture: ComponentFixture<PostsTopPosts>;
  let component: PostsTopPosts;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsTopPosts
      ],
      imports: [
        LanguagePageModule,
        TranslateModule.forChild(),
        IonicModule.forRoot(MeteoMeter)
      ],
      providers: [
        { provide: PostAPI, useClass: PostAPIMock },
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
    fixture = TestBed.createComponent(PostsTopPosts);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsTopPosts Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsTopPosts).toBeTruthy();
  }));

  it('PostsTopPosts Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsTopPosts Component - onToPostDetails: should navigate to posts-postDetails page', fakeAsync(() => {
    spy = spyOn(component, 'onToPostDetails').and.callThrough();
    component.onToPostDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToPostDetails();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-postDetails');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('PostsTopPosts Component - onHorizontalScroll: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onHorizontalScroll').and.callThrough();
    component.onHorizontalScroll();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsTopPosts Component - onGetTopPosts: should use postAPI service to GetTopPosts', fakeAsync(() => {
    var idUser = 0;
    spy = spyOn(component, 'onGetTopPosts').and.callThrough();
    component.onGetTopPosts(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    spy = spyOn(component._postAPI, 'getTopPostsByUser').and.callThrough();
    component.onGetTopPosts(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
