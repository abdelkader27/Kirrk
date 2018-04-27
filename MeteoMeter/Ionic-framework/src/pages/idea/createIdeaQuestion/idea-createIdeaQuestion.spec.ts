
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
import { IdeaCreateIdeaQuestion } from "./idea-createIdeaQuestion";
import { PictureVM } from '../../../viewModels/pictureVM';
import { PostAPI } from '../../../services/postAPI.service';
import { PostAPIMock } from '../../../../test-config/mocks/postAPIMock';
describe('IdeaCreateIdeaQuestion Component', () => {
  let fixture: ComponentFixture<IdeaCreateIdeaQuestion>;
  let component: IdeaCreateIdeaQuestion;
  let spy: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MeteoMeter,
        IdeaCreateIdeaQuestion
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
    fixture = TestBed.createComponent(IdeaCreateIdeaQuestion);
    component = fixture.componentInstance;
  });
  
  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('IdeaCreateIdeaQuestion Component: should be created', fakeAsync(() => {
    expect(component instanceof IdeaCreateIdeaQuestion).toBeTruthy();
  }));

  it('IdeaCreateIdeaQuestion Component: should navigate to language page', fakeAsync(() => {
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
  it('IdeaCreateIdeaQuestion Component - onNext: should navigate to idea-createIdeaSettings page', fakeAsync(() => {
    spy = spyOn(component, 'onNext').and.callThrough();
    component.onNext();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onNext();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('idea-createIdeaSettings');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('IdeaCreateIdeaQuestion Component - onDiscard: should navigate to posts-chooseNewPostCategory page', fakeAsync(() => {
    spy = spyOn(component, 'onDiscard').and.callThrough();
    component.onDiscard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalled();
    spy = spyOn(component._nav, 'push').and.callThrough();
    component.onDiscard();
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith('posts-chooseNewPostCategory');
    spy.calls.mostRecent().returnValue.then((result) => {
      expect(result).toEqual('PUSH');
    });
  }));

  it('IdeaCreateIdeaQuestion Component - onUploadPicture: should use postAPI service to UploadPicture', fakeAsync(() => {
    var picture = null;
    spy = spyOn(component, 'onUploadPicture').and.callThrough();
    component.onUploadPicture(
    picture
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    picture
    );
    spy = spyOn(component._postAPI, 'uploadPicture').and.callThrough();
    component.onUploadPicture(
    picture
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    picture
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
  it('IdeaCreateIdeaQuestion Component - onGetDefaultPicture: should use postAPI service to GetDefaultPicture', fakeAsync(() => {
    spy = spyOn(component, 'onGetDefaultPicture').and.callThrough();
    component.onGetDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    spy = spyOn(component._postAPI, 'getDefaultPicture').and.callThrough();
    component.onGetDefaultPicture(
    );
    flushMicrotasks();
    expect(spy).toHaveBeenCalledWith(
    );
    var result = spy.calls.mostRecent().returnValue;
    expect(result).toBeDefined();
  }));
});
