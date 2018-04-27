
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
import { IdentifierModel } from './identifierModel';
import { UserProfileModel } from './userProfileModel';
/**
 * class: Group.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class GroupModel extends IdentifierModel {
  /**
   * property.
   */
  public name: string;
  /**
   * property.
   */
  public groupDepartment: string;
  /**
   * property.
   */
  public city: string;
  /**
   * property.
   */
  public creationDate: Date;
  /**
   * property.
   */
  public country: string;
  /**
   * reference.
   */
  public createdBy: UserProfileModel;
  /**
   * reference.
   * isCollection.
   */
  public users: UserProfileModel[];
  constructor(
    id1: number,
    name1: string,
    groupDepartment1: string,
    city1: string,
    creationDate1: Date,
    country1: string,
    createdBy1: UserProfileModel,
    users1: UserProfileModel[]
  ) {
    super(
      id1
    );
    this.name = name1;
    this.groupDepartment = groupDepartment1;
    this.city = city1;
    this.creationDate = creationDate1;
    this.country = country1;
    this.createdBy = createdBy1;
    this.users = users1;
  }
}
