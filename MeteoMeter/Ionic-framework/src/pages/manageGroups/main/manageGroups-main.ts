
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
import { GroupsVM } from '../../../viewModels/groupsVM';
import { IdeasVM } from '../../../viewModels/ideasVM';
import { UsersVM } from '../../../viewModels/usersVM';
import { CardsVM } from '../../../viewModels/cardsVM';
import { Observable } from 'rxjs';
import { GroupAPI } from '../../../services/groupAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: ManageGroupsMain.
 * manageGroups.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'manageGroups-main',
  segment: 'manageGroups/main'
})
@Component({
  selector: 'manageGroups-main',
  templateUrl: 'manageGroups-main.html'
})
export class ManageGroupsMain {
  constructor(
    public _groupAPI: GroupAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onGetGroups
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idUser `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetGroups(
    idUser: number
  ) {
    return this._groupAPI.list(
      idUser
    ).subscribe();
  }

  /**
   * method: onToCreateGroup
   * That method is a blank method.
   */
  public onToCreateGroup() {
    // TO DO
  }

  /**
   * method: onToGroupDetails
   * That method is a navigation method.
   */
  public onToGroupDetails() {
    this._nav.push('manageGroups-groupDetails');
  }

  /**
   * method: onDelete
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idGroup `number`.
   * @returns A `Subscription<any>`.
   */
  public onDelete(
    idGroup: number
  ) {
    return this._groupAPI.delete(
      idGroup
    ).subscribe();
  }

  /**
   * method: onToEditGroup
   * That method is a blank method.
   */
  public onToEditGroup() {
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
