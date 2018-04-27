
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
/**
 * class: UserProfile.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class UserProfileModel extends IdentifierModel {
  /**
   * property.
   */
  public userId: string;
  /**
   * property.
   */
  public job: string;
  /**
   * property.
   */
  public department: string;
  /**
   * property.
   */
  public city: string;
  /**
   * property.
   */
  public country: string;
  constructor(
    id1: number,
    userId1: string,
    job1: string,
    department1: string,
    city1: string,
    country1: string
  ) {
    super(
      id1
    );
    this.userId = userId1;
    this.job = job1;
    this.department = department1;
    this.city = city1;
    this.country = country1;
  }
}
