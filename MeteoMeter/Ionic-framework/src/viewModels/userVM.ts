
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
import { UserProfileModel } from '../models/userProfileModel';
/**
 * class: UserVM
 * You should add a description of your entity here.
 * This viewModel is a reference used in Concerns or
 * in APIs' parameters or return types.
 * This model is generated from ViewModel domain.
 */
export class UserVM {
  /**
   * property.
   */
  public firstname: string;
  /**
   * property.
   */
  public lastname: string;
  /**
   * property.
   */
  public pictureUrl: string;
  /**
   * property.
   */
  public facebookId: string;
  /**
   * reference.
   */
  public user: UserProfileModel;
  constructor(
    firstname1: string,
    lastname1: string,
    pictureUrl1: string,
    facebookId1: string,
    user1: UserProfileModel
  ) {
    this.firstname = firstname1;
    this.lastname = lastname1;
    this.pictureUrl = pictureUrl1;
    this.facebookId = facebookId1;
    this.user = user1;
  }
}
