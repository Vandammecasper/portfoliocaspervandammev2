// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type AboutDocumentDataSlicesSlice = SkillSlice;

/**
 * Content for about documents
 */
interface AboutDocumentData {
  /**
   * information1 field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.information1
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information1: prismic.KeyTextField;

  /**
   * information2 field in *about*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.information2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information2: prismic.KeyTextField;

  /**
   * Slice Zone field in *about*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<AboutDocumentDataSlicesSlice>;
}

/**
 * about document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, "about", Lang>;

/**
 * Content for contact documents
 */
interface ContactDocumentData {
  /**
   * title field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * slogan field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.slogan
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slogan: prismic.KeyTextField;

  /**
   * information field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.information
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information: prismic.KeyTextField;

  /**
   * information 2 field in *contact*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.information_2
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information_2: prismic.KeyTextField;
}

/**
 * contact document from Prismic
 *
 * - **API ID**: `contact`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContactDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ContactDocumentData>,
    "contact",
    Lang
  >;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * slogan field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slogan
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  slogan: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type ProjectsDocumentDataSlicesSlice = ProjectSlice;

/**
 * Content for projects documents
 */
interface ProjectsDocumentData {
  /**
   * Slice Zone field in *projects*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: projects.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProjectsDocumentDataSlicesSlice>;
}

/**
 * projects document from Prismic
 *
 * - **API ID**: `projects`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProjectsDocumentData>,
    "projects",
    Lang
  >;

export type AllDocumentTypes =
  | AboutDocument
  | ContactDocument
  | HomepageDocument
  | ProjectsDocument;

/**
 * Primary content in *Project → Items*
 */
export interface ProjectSliceDefaultItem {
  /**
   * foto field in *Project → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].foto
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  foto: prismic.ImageField<never>;

  /**
   * title field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * information 1 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].information_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information_1: prismic.KeyTextField;

  /**
   * information 2 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].information_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  information_2: prismic.KeyTextField;

  /**
   * skill1 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].skill1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill1: prismic.KeyTextField;

  /**
   * year1 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].year1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year1: prismic.KeyTextField;

  /**
   * skill2 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].skill2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill2: prismic.KeyTextField;

  /**
   * year2 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].year2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year2: prismic.KeyTextField;

  /**
   * skill3 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].skill3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill3: prismic.KeyTextField;

  /**
   * year3 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].year3
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year3: prismic.KeyTextField;

  /**
   * skill4 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].skill4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  skill4: prismic.KeyTextField;

  /**
   * year4 field in *Project → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.items[].year4
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  year4: prismic.KeyTextField;
}

/**
 * Default variation for Project Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ProjectSliceDefaultItem>
>;

/**
 * Slice variation for *Project*
 */
type ProjectSliceVariation = ProjectSliceDefault;

/**
 * Project Shared Slice
 *
 * - **API ID**: `project`
 * - **Description**: Project
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectSlice = prismic.SharedSlice<
  "project",
  ProjectSliceVariation
>;

/**
 * Primary content in *Skill → Items*
 */
export interface SkillSliceDefaultItem {
  /**
   * title field in *Skill → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skill.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * years field in *Skill → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: skill.items[].years
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  years: prismic.KeyTextField;
}

/**
 * Default variation for Skill Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SkillSliceDefaultItem>
>;

/**
 * Slice variation for *Skill*
 */
type SkillSliceVariation = SkillSliceDefault;

/**
 * Skill Shared Slice
 *
 * - **API ID**: `skill`
 * - **Description**: Skill
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SkillSlice = prismic.SharedSlice<"skill", SkillSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      ContactDocument,
      ContactDocumentData,
      HomepageDocument,
      HomepageDocumentData,
      ProjectsDocument,
      ProjectsDocumentData,
      AllDocumentTypes,
      ProjectSlice,
      ProjectSliceVariation,
      ProjectSliceDefault,
      SkillSlice,
      SkillSliceVariation,
      SkillSliceDefault,
    };
  }
}
