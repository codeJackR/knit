import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerCreatorDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreatorDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator_id?: string | null;
  readonly identity1?: string | null;
  readonly identity2?: string | null;
  readonly identity3?: string | null;
  readonly identity4?: string | null;
  readonly identity5?: string | null;
  readonly keyword1?: string | null;
  readonly keyword2?: string | null;
  readonly keyword3?: string | null;
  readonly keyword4?: string | null;
  readonly keyword5?: string | null;
  readonly instagram_id?: string | null;
  readonly youtube_id?: string | null;
  readonly Creator?: Creator | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly creatorDetailsCreatorId?: string | null;
}

type LazyCreatorDetails = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CreatorDetails, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly creator_id?: string | null;
  readonly identity1?: string | null;
  readonly identity2?: string | null;
  readonly identity3?: string | null;
  readonly identity4?: string | null;
  readonly identity5?: string | null;
  readonly keyword1?: string | null;
  readonly keyword2?: string | null;
  readonly keyword3?: string | null;
  readonly keyword4?: string | null;
  readonly keyword5?: string | null;
  readonly instagram_id?: string | null;
  readonly youtube_id?: string | null;
  readonly Creator: AsyncItem<Creator | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly creatorDetailsCreatorId?: string | null;
}

export declare type CreatorDetails = LazyLoading extends LazyLoadingDisabled ? EagerCreatorDetails : LazyCreatorDetails

export declare const CreatorDetails: (new (init: ModelInit<CreatorDetails>) => CreatorDetails) & {
  copyOf(source: CreatorDetails, mutator: (draft: MutableModel<CreatorDetails>) => MutableModel<CreatorDetails> | void): CreatorDetails;
}

type EagerCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email_id?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly location?: string | null;
  readonly is_test_account?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email_id?: string | null;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly location?: string | null;
  readonly is_test_account?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}