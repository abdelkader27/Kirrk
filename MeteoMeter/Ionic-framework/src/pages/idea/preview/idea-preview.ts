
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
import { GroupVM } from '../../../viewModels/groupVM';
import { IdeaVM } from '../../../viewModels/ideaVM';
import { Observable } from 'rxjs';
import { IdeaAPI } from '../../../services/ideaAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: IdeaPreview.
 * preview.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'idea-preview',
  segment: 'idea/preview'
})
@Component({
  selector: 'idea-preview',
  templateUrl: 'idea-preview.html'
})
export class IdeaPreview {
  constructor(
    public _ideaAPI: IdeaAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onSave
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idea `IdeaVM`.
   * @returns A `Subscription<any>`.
   */
  public onSave(
    idea: IdeaVM
  ) {
    return this._ideaAPI.create(
      idea
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
