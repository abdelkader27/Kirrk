
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
import { PostsMain } from "./posts-main";
import { CardsVM } from '../../../viewModels/cardsVM';
import { PostAPI } from '../../../services/postAPI.service';
import { PostAPIMock } from '../../../../test-config/mocks/postAPIMock';
describe('PostsMain Component', () => {
  let fixture: ComponentFixture<PostsMain>;
  let component: PostsMain;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsMain
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
    fixture = TestBed.createComponent(PostsMain);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsMain Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsMain).toBeTruthy();
  }));

  it('PostsMain Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsMain Component - onToChooseNewPostCategory: should navigate to posts-chooseNewPostCategory page', fakeAsync(() => {
    spy = spyOn(component, 'onToChooseNewPostCategory').and.callThrough();
    component.onToChooseNewPostCategory();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToChooseNewPostCategory();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-chooseNewPostCategory');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('PostsMain Component - onToPostDetails: should navigate to posts-postDetails page', fakeAsync(() => {
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

  it('PostsMain Component - onGetLatestPosts: should use postAPI service to GetLatestPosts', fakeAsync(() => {
    var idUser = 0;
    spy = spyOn(component, 'onGetLatestPosts').and.callThrough();
    component.onGetLatestPosts(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    spy = spyOn(component._postAPI, 'getLatestsPostsByUser').and.callThrough();
    component.onGetLatestPosts(
    idUser
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    idUser
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('PostsMain Component - onDeletePost: should use postAPI service to DeletePost', fakeAsync(() => {
    var id = 0;
    spy = spyOn(component, 'onDeletePost').and.callThrough();
    component.onDeletePost(
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id
    );
    spy = spyOn(component._postAPI, 'delete').and.callThrough();
    component.onDeletePost(
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
