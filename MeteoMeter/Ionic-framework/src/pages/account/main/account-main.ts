
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
import { UserVM } from '../../../viewModels/userVM';
import { CardVM } from '../../../viewModels/cardVM';
import { Observable } from 'rxjs';
import { UserAPI } from '../../../services/userAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: AccountMain.
 * Account .
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'account-main',
  segment: 'account/main'
})
@Component({
  selector: 'account-main',
  templateUrl: 'account-main.html'
})
export class AccountMain {
  constructor(
    public _userAPI: UserAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onGetUser
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idUser `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetUser(
    idUser: number
  ) {
    return this._userAPI.get(
      idUser
    ).subscribe();
  }

  /**
   * method: onToEditProfile
   * That method is a navigation method.
   */
  public onToEditProfile() {
    this._nav.push('account-editProfile');
  }

  /**
   * method: onToManageGroups
   * That method is a navigation method.
   */
  public onToManageGroups() {
    this._nav.push('manageGroups-main');
  }

  /**
   * method: onToSettings
   * That method is a navigation method.
   */
  public onToSettings() {
    this._nav.push('settings-main');
  }

  /**
   * method: onSignOut
   * That method is a blank method.
   */
  public onSignOut() {
    // TO DO
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
