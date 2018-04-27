
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
import { TopPostsVM } from '../../../viewModels/topPostsVM';
import { Observable } from 'rxjs';
import { HighlightsAPI } from '../../../services/highlightsAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: HighlightsTopIdeas.
 * latestIdeas.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'highlights-topIdeas',
  segment: 'highlights/topIdeas'
})
@Component({
  selector: 'highlights-topIdeas',
  templateUrl: 'highlights-topIdeas.html'
})
export class HighlightsTopIdeas {
  constructor(
    public _highlightsAPI: HighlightsAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onShowCard
   * That method is a blank method.
   */
  public onShowCard() {
    // TO DO
  }

  /**
   * method: onGetTopPosts
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @returns A `Subscription<any>`.
   */
  public onGetTopPosts(
  ) {
    return this._highlightsAPI.getTopPosts(
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
