/*
** DON'T EDIT THIS FILE **
It's been generated by Zapatos, and is liable to be overwritten

Zapatos: https://jawj.github.io/zapatos/
Copyright (C) 2020 - 2022 George MacKerron
Released under the MIT licence: see LICENCE file
*/

declare module 'zapatos/schema' {

  import type * as db from 'zapatos/db';

  // got a type error on schemaVersionCanary below? update by running `npx zapatos`
  export interface schemaVersionCanary extends db.SchemaVersionCanary { version: 104 }


  /* === schema: public === */

  /* --- enums --- */
  /* (none) */

  /* --- tables --- */

  /**
   * **comment**
   * - Table in database
   */
  export namespace comment {
    export type Table = 'comment';
    export interface Selectable {
      /**
      * **comment.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('comment_id_seq'::regclass)`
      */
      id: number;
      /**
      * **comment.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number;
      /**
      * **comment.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number;
      /**
      * **comment.text**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      text: string;
      /**
      * **comment.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: Date;
      /**
      * **comment.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: Date;
    }
    export interface JSONSelectable {
      /**
      * **comment.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('comment_id_seq'::regclass)`
      */
      id: number;
      /**
      * **comment.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number;
      /**
      * **comment.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number;
      /**
      * **comment.text**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      text: string;
      /**
      * **comment.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: db.TimestampString;
      /**
      * **comment.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: db.TimestampString;
    }
    export interface Whereable {
      /**
      * **comment.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('comment_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **comment.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **comment.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **comment.text**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      text?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **comment.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **comment.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **comment.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('comment_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **comment.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **comment.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **comment.text**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      text: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **comment.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
      /**
      * **comment.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **comment.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('comment_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **comment.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **comment.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **comment.text**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      text?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **comment.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
      /**
      * **comment.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'comment_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **post**
   * - Table in database
   */
  export namespace post {
    export type Table = 'post';
    export interface Selectable {
      /**
      * **post.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('post_id_seq'::regclass)`
      */
      id: number;
      /**
      * **post.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number;
      /**
      * **post.title**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **post.description**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      description: string;
      /**
      * **post.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: Date;
      /**
      * **post.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: Date;
    }
    export interface JSONSelectable {
      /**
      * **post.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('post_id_seq'::regclass)`
      */
      id: number;
      /**
      * **post.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number;
      /**
      * **post.title**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      title: string;
      /**
      * **post.description**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      description: string;
      /**
      * **post.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: db.TimestampString;
      /**
      * **post.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: db.TimestampString;
    }
    export interface Whereable {
      /**
      * **post.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('post_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **post.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **post.title**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **post.description**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      description?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **post.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **post.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **post.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('post_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **post.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **post.title**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      title: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **post.description**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      description: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **post.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
      /**
      * **post.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **post.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('post_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **post.userId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      userId?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **post.title**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      title?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **post.description**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      description?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **post.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
      /**
      * **post.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'post_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **postTag**
   * - Table in database
   */
  export namespace postTag {
    export type Table = 'postTag';
    export interface Selectable {
      /**
      * **postTag.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number;
      /**
      * **postTag.tagName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      tagName: string;
    }
    export interface JSONSelectable {
      /**
      * **postTag.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number;
      /**
      * **postTag.tagName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      tagName: string;
    }
    export interface Whereable {
      /**
      * **postTag.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **postTag.tagName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      tagName?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **postTag.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **postTag.tagName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      tagName: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **postTag.postId**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      postId?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **postTag.tagName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      tagName?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'postTag_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **schemaMigrations**
   * - Table in database
   */
  export namespace schemaMigrations {
    export type Table = 'schemaMigrations';
    export interface Selectable {
      /**
      * **schemaMigrations.version**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface JSONSelectable {
      /**
      * **schemaMigrations.version**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      version: string;
    }
    export interface Whereable {
      /**
      * **schemaMigrations.version**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **schemaMigrations.version**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      version: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **schemaMigrations.version**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      version?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = never;
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **tag**
   * - Table in database
   */
  export namespace tag {
    export type Table = 'tag';
    export interface Selectable {
      /**
      * **tag.name**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface JSONSelectable {
      /**
      * **tag.name**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      name: string;
    }
    export interface Whereable {
      /**
      * **tag.name**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **tag.name**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      name: string | db.Parameter<string> | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **tag.name**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      name?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
    }
    export type UniqueIndex = 'tag_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /**
   * **user**
   * - Table in database
   */
  export namespace user {
    export type Table = 'user';
    export interface Selectable {
      /**
      * **user.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('user_id_seq'::regclass)`
      */
      id: number;
      /**
      * **user.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **user.firstName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      firstName: string;
      /**
      * **user.lastName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      lastName: string;
      /**
      * **user.bio**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      bio: string;
      /**
      * **user.age**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      age: number;
      /**
      * **user.city**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      city: string;
      /**
      * **user.country**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      country: string;
      /**
      * **user.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: Date;
      /**
      * **user.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: Date;
    }
    export interface JSONSelectable {
      /**
      * **user.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('user_id_seq'::regclass)`
      */
      id: number;
      /**
      * **user.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string;
      /**
      * **user.firstName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      firstName: string;
      /**
      * **user.lastName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      lastName: string;
      /**
      * **user.bio**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      bio: string;
      /**
      * **user.age**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      age: number;
      /**
      * **user.city**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      city: string;
      /**
      * **user.country**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      country: string;
      /**
      * **user.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt: db.TimestampString;
      /**
      * **user.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt: db.TimestampString;
    }
    export interface Whereable {
      /**
      * **user.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('user_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.firstName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      firstName?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.lastName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      lastName?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.bio**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      bio?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.age**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      age?: number | db.Parameter<number> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.city**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      city?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.country**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      country?: string | db.Parameter<string> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
      /**
      * **user.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.SQLFragment | db.ParentColumn>;
    }
    export interface Insertable {
      /**
      * **user.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('user_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment;
      /**
      * **user.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.firstName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      firstName: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.lastName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      lastName: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.bio**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      bio: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.age**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      age: number | db.Parameter<number> | db.SQLFragment;
      /**
      * **user.city**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      city: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.country**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      country: string | db.Parameter<string> | db.SQLFragment;
      /**
      * **user.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
      /**
      * **user.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment;
    }
    export interface Updatable {
      /**
      * **user.id**
      * - `int4` in database
      * - `NOT NULL`, default: `nextval('user_id_seq'::regclass)`
      */
      id?: number | db.Parameter<number> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.DefaultType | db.SQLFragment>;
      /**
      * **user.email**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      email?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.firstName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      firstName?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.lastName**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      lastName?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.bio**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      bio?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.age**
      * - `int4` in database
      * - `NOT NULL`, no default
      */
      age?: number | db.Parameter<number> | db.SQLFragment | db.SQLFragment<any, number | db.Parameter<number> | db.SQLFragment>;
      /**
      * **user.city**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      city?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.country**
      * - `text` in database
      * - `NOT NULL`, no default
      */
      country?: string | db.Parameter<string> | db.SQLFragment | db.SQLFragment<any, string | db.Parameter<string> | db.SQLFragment>;
      /**
      * **user.createdAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      createdAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
      /**
      * **user.updatedAt**
      * - `timestamp` in database
      * - `NOT NULL`, default: `now()`
      */
      updatedAt?: (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment | db.SQLFragment<any, (db.TimestampString | Date) | db.Parameter<(db.TimestampString | Date)> | db.DefaultType | db.SQLFragment>;
    }
    export type UniqueIndex = 'userEmailIndex' | 'user_pkey';
    export type Column = keyof Selectable;
    export type OnlyCols<T extends readonly Column[]> = Pick<Selectable, T[number]>;
    export type SQLExpression = Table | db.ColumnNames<Updatable | (keyof Updatable)[]> | db.ColumnValues<Updatable> | Whereable | Column | db.ParentColumn | db.GenericSQLExpression;
    export type SQL = SQLExpression | SQLExpression[];
  }

  /* --- aggregate types --- */

  export namespace public {  
    export type Table = comment.Table | post.Table | postTag.Table | schemaMigrations.Table | tag.Table | user.Table;
    export type Selectable = comment.Selectable | post.Selectable | postTag.Selectable | schemaMigrations.Selectable | tag.Selectable | user.Selectable;
    export type JSONSelectable = comment.JSONSelectable | post.JSONSelectable | postTag.JSONSelectable | schemaMigrations.JSONSelectable | tag.JSONSelectable | user.JSONSelectable;
    export type Whereable = comment.Whereable | post.Whereable | postTag.Whereable | schemaMigrations.Whereable | tag.Whereable | user.Whereable;
    export type Insertable = comment.Insertable | post.Insertable | postTag.Insertable | schemaMigrations.Insertable | tag.Insertable | user.Insertable;
    export type Updatable = comment.Updatable | post.Updatable | postTag.Updatable | schemaMigrations.Updatable | tag.Updatable | user.Updatable;
    export type UniqueIndex = comment.UniqueIndex | post.UniqueIndex | postTag.UniqueIndex | schemaMigrations.UniqueIndex | tag.UniqueIndex | user.UniqueIndex;
    export type Column = comment.Column | post.Column | postTag.Column | schemaMigrations.Column | tag.Column | user.Column;
  
    export type AllBaseTables = [comment.Table, post.Table, postTag.Table, schemaMigrations.Table, tag.Table, user.Table];
    export type AllForeignTables = [];
    export type AllViews = [];
    export type AllMaterializedViews = [];
    export type AllTablesAndViews = [comment.Table, post.Table, postTag.Table, schemaMigrations.Table, tag.Table, user.Table];
  }



  /* === global aggregate types === */

  export type Schema = 'public';
  export type Table = public.Table;
  export type Selectable = public.Selectable;
  export type JSONSelectable = public.JSONSelectable;
  export type Whereable = public.Whereable;
  export type Insertable = public.Insertable;
  export type Updatable = public.Updatable;
  export type UniqueIndex = public.UniqueIndex;
  export type Column = public.Column;

  export type AllSchemas = ['public'];
  export type AllBaseTables = [...public.AllBaseTables];
  export type AllForeignTables = [...public.AllForeignTables];
  export type AllViews = [...public.AllViews];
  export type AllMaterializedViews = [...public.AllMaterializedViews];
  export type AllTablesAndViews = [...public.AllTablesAndViews];


  /* === lookups === */

  export type SelectableForTable<T extends Table> = {
    "comment": comment.Selectable;
    "post": post.Selectable;
    "postTag": postTag.Selectable;
    "schemaMigrations": schemaMigrations.Selectable;
    "tag": tag.Selectable;
    "user": user.Selectable;
  }[T];

  export type JSONSelectableForTable<T extends Table> = {
    "comment": comment.JSONSelectable;
    "post": post.JSONSelectable;
    "postTag": postTag.JSONSelectable;
    "schemaMigrations": schemaMigrations.JSONSelectable;
    "tag": tag.JSONSelectable;
    "user": user.JSONSelectable;
  }[T];

  export type WhereableForTable<T extends Table> = {
    "comment": comment.Whereable;
    "post": post.Whereable;
    "postTag": postTag.Whereable;
    "schemaMigrations": schemaMigrations.Whereable;
    "tag": tag.Whereable;
    "user": user.Whereable;
  }[T];

  export type InsertableForTable<T extends Table> = {
    "comment": comment.Insertable;
    "post": post.Insertable;
    "postTag": postTag.Insertable;
    "schemaMigrations": schemaMigrations.Insertable;
    "tag": tag.Insertable;
    "user": user.Insertable;
  }[T];

  export type UpdatableForTable<T extends Table> = {
    "comment": comment.Updatable;
    "post": post.Updatable;
    "postTag": postTag.Updatable;
    "schemaMigrations": schemaMigrations.Updatable;
    "tag": tag.Updatable;
    "user": user.Updatable;
  }[T];

  export type UniqueIndexForTable<T extends Table> = {
    "comment": comment.UniqueIndex;
    "post": post.UniqueIndex;
    "postTag": postTag.UniqueIndex;
    "schemaMigrations": schemaMigrations.UniqueIndex;
    "tag": tag.UniqueIndex;
    "user": user.UniqueIndex;
  }[T];

  export type ColumnForTable<T extends Table> = {
    "comment": comment.Column;
    "post": post.Column;
    "postTag": postTag.Column;
    "schemaMigrations": schemaMigrations.Column;
    "tag": tag.Column;
    "user": user.Column;
  }[T];

  export type SQLForTable<T extends Table> = {
    "comment": comment.SQL;
    "post": post.SQL;
    "postTag": postTag.SQL;
    "schemaMigrations": schemaMigrations.SQL;
    "tag": tag.SQL;
    "user": user.SQL;
  }[T];

}
