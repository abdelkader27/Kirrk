
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
import { FlowAPI } from '../../../services/flowAPI.service';
import { LanguagePage } from '../../language/language';

/**
 * class: FlowMain.
 * flow.
 * This is the component of that layout.
 * This component is generated from Concerns domain.
 */
@IonicPage({
  name: 'flow-main',
  segment: 'flow/main'
})
@Component({
  selector: 'flow-main',
  templateUrl: 'flow-main.html'
})
export class FlowMain {
  constructor(
    public _flowAPI: FlowAPI,
    public _nav: NavController
  ) {
  }

  /**
   * method: onNextCard
   * That method is a blank method.
   */
  public onNextCard() {
    // TO DO
  }

  /**
   * method: onPreviousCard
   * That method is a blank method.
   */
  public onPreviousCard() {
    // TO DO
  }

  /**
   * method: onDiscard
   * That method is a blank method.
   */
  public onDiscard() {
    // TO DO
  }

  /**
   * method: onGetFlowCards
   * You should add a description of your method here.
   * that method is an Api service call method.
   * @param idUser `number`.
   * @returns A `Subscription<any>`.
   */
  public onGetFlowCards(
    idUser: number
  ) {
    return this._flowAPI.list(
      idUser
    ).subscribe();
  }

  /**
   * method: onSwipeCard
   * That method is a blank method.
   */
  public onSwipeCard() {
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
