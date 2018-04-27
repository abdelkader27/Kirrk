
/*
 * You should add your licence here, here is an example :
 *
 * SonarQube, open source software quality management tool.
 * Copyright (C) 2008-2013 SonarSource
 * mailto:contact AT sonarsource DOT com
 *
 * SonarQube is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * SonarQube is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CardsVM } from '../../../viewModels/cardsVM';
import { Observable } from 'rxjs';
import { PostAPI } from '../../../services/postAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: PostsMain.
 * Posts.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'posts-main',
  segment: 'posts/main'
})
@Component({
  selector: 'posts-main',
  templateUrl: 'posts-main.html'
})
export class PostsMain {
  constructor(
    public _postAPI: PostAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onToChooseNewPostCategory
   * That method is a navigation method.
   */
  public onToChooseNewPostCategory() {
    this._nav.push('posts-chooseNewPostCategory');
  }

  /**
   * method: onToPostDetails
   * That method is a navigation method.
   */
  public onToPostDetails() {
    this._nav.push('posts-postDetails');
  }

  /**
   * method: onGetLatestPosts
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idUser `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetLatestPosts(
    idUser: number
  ) {
    return this._postAPI.getLatestsPostsByUser(
      idUser
    ).subscribe();
  }

  /**
   * method: onDeletePost
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param id `number`.
   * @returns A `Subscription<any>`.
   */
  public onDeletePost(
    id: number
  ) {
    return this._postAPI.delete(
      id
    ).subscribe();
  }

  /**
   * method: onLanguage.
   * That method enables to enter language
   * page with a button.
   */
  public onLanguage() {
    this._nav.push(LanguagePage);
  }

}
