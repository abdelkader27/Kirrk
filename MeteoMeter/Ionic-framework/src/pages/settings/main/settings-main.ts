
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
import { LanguagePage } from '../../language/language';

/**
 * class: SettingsMain.
 * Setting.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'settings-main',
  segment: 'settings/main'
})
@Component({
  selector: 'settings-main',
  templateUrl: 'settings-main.html'
})
export class SettingsMain {
  constructor(
    public _nav: NavController
  ) {
  }

  /**
   * method: onToNotifications
   * That method is a navigation method.
   */
  public onToNotifications() {
    this._nav.push('settings-notifications');
  }

  /**
   * method: onToEmailNotifications
   * That method is a navigation method.
   */
  public onToEmailNotifications() {
    this._nav.push('settings-emailNotifications');
  }

  /**
   * method: onToApplicationSettings
   * That method is a navigation method.
   */
  public onToApplicationSettings() {
    this._nav.push('settings-applicationSettings');
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
