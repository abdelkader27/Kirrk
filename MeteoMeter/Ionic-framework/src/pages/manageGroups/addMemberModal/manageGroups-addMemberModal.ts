
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
import { GroupsVM } from '../../../viewModels/groupsVM';
import { IdeasVM } from '../../../viewModels/ideasVM';
import { UsersVM } from '../../../viewModels/usersVM';
import { CardsVM } from '../../../viewModels/cardsVM';
import { Observable } from 'rxjs';
import { GroupAPI } from '../../../services/groupAPI.service';
import { UserAPI } from '../../../services/userAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: ManageGroupsAddMemberModal.
 * addMemberModal.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'manageGroups-addMemberModal',
  segment: 'manageGroups/addMemberModal'
})
@Component({
  selector: 'manageGroups-addMemberModal',
  templateUrl: 'manageGroups-addMemberModal.html'
})
export class ManageGroupsAddMemberModal {
  constructor(
    public _groupAPI: GroupAPI,
    public _userAPI: UserAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onSearchUser
   * That method is a blank method.
   */
  public onSearchUser() {
    // TO DO
  }

  /**
   * method: onAddMember
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param user `UserVM`.
   * @param id `number`.
   * @returns A `Subscription<any>`.
   */
  public onAddMember(
    user: UserVM,
    id: number
  ) {
    return this._groupAPI.addMember(
      user,
      id
    ).subscribe();
  }

  /**
   * method: onGetMembers
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @returns A `Subscription<any>`.
   */
  public onGetMembers(
  ) {
    return this._userAPI.list(
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
