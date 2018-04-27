
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
import { PostsEditPost } from "./posts-editPost";
import { GroupVM } from '../../../viewModels/groupVM';
import { IdeaVM } from '../../../viewModels/ideaVM';
import { UserVM } from '../../../viewModels/userVM';
import { CardVM } from '../../../viewModels/cardVM';
import { PostAPI } from '../../../services/postAPI.service';
import { PostAPIMock } from '../../../../test-config/mocks/postAPIMock';
describe('PostsEditPost Component', () => {
  let fixture: ComponentFixture<PostsEditPost>;
  let component: PostsEditPost;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsEditPost
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
    fixture = TestBed.createComponent(PostsEditPost);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsEditPost Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsEditPost).toBeTruthy();
  }));

  it('PostsEditPost Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsEditPost Component - onEditPost: should use postAPI service to EditPost', fakeAsync(() => {
    var post = null;
    spy = spyOn(component, 'onEditPost').and.callThrough();
    component.onEditPost(
    post
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    post
    );
    spy = spyOn(component._postAPI, 'update').and.callThrough();
    component.onEditPost(
    post
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    post
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
