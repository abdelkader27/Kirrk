
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
import { CardModel } from './cardModel';
import { UserProfileModel } from './userProfileModel';
import { PhotoModel } from './photoModel';
import { GroupModel } from './groupModel';
import { ChoiceModel } from './choiceModel';
/**
 * class: Idea.
 * You should add a description of your entity here.
 * This model is a reference used in viewModels or
 * in another referenced model.
 * This model is generated from DataModel domain.
 */
export class IdeaModel extends CardModel {
  /**
   * property.
   */
  public endDate: Date;
  constructor(
    id1: number,
    publicationDate1: Date,
    content1: string,
    type1: string,
    createdBy1: UserProfileModel,
    photo1: PhotoModel,
    targetGroups1: GroupModel[],
    choices1: ChoiceModel[],
    endDate1: Date
  ) {
    super(
      id1,
      publicationDate1,
      content1,
      type1,
      createdBy1,
      photo1,
      targetGroups1,
      choices1
    );
    this.endDate = endDate1;
  }
}
