
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
import { PostsPostDetails } from "./posts-postDetails";
import { UserVM } from '../../../viewModels/userVM';
import { CardVM } from '../../../viewModels/cardVM';
import { PostAPI } from '../../../services/postAPI.service';
import { PostAPIMock } from '../../../../test-config/mocks/postAPIMock';
describe('PostsPostDetails Component', () => {
  let fixture: ComponentFixture<PostsPostDetails>;
  let component: PostsPostDetails;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        PostsPostDetails
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
    fixture = TestBed.createComponent(PostsPostDetails);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('PostsPostDetails Component: should be created', fakeAsync(() => {
    expect(component instanceof PostsPostDetails).toBeTruthy();
  }));

  it('PostsPostDetails Component: should navigate to language page', fakeAsync(() => {
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
  it('PostsPostDetails Component - onGetPostDetails: should use postAPI service to GetPostDetails', fakeAsync(() => {
    var id = 0;
    spy = spyOn(component, 'onGetPostDetails').and.callThrough();
    component.onGetPostDetails(
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id
    );
    spy = spyOn(component._postAPI, 'get').and.callThrough();
    component.onGetPostDetails(
    id
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    id
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('PostsPostDetails Component - onCheckPostStatus: should do nothing', fakeAsync(() => {
    spy = spyOn(component, 'onCheckPostStatus').and.callThrough();
    component.onCheckPostStatus();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeUndefined();
  }));

  it('PostsPostDetails Component - onToEditPost: should navigate to posts-editPost page', fakeAsync(() => {
    spy = spyOn(component, 'onToEditPost').and.callThrough();
    component.onToEditPost();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onToEditPost();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-editPost');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

});
