import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type PostsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AuthorsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Posts {
  readonly id: string;
  readonly text?: string;
  readonly authorsID: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Posts, PostsMetaData>);
  static copyOf(source: Posts, mutator: (draft: MutableModel<Posts, PostsMetaData>) => MutableModel<Posts, PostsMetaData> | void): Posts;
}

export declare class Authors {
  readonly id: string;
  readonly first_name?: string;
  readonly last_name?: string;
  readonly AuthorPosts?: (Posts | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Authors, AuthorsMetaData>);
  static copyOf(source: Authors, mutator: (draft: MutableModel<Authors, AuthorsMetaData>) => MutableModel<Authors, AuthorsMetaData> | void): Authors;
}