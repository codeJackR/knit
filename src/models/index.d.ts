import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCreator = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Creator, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username?: string | null;
  readonly email_id?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Creator = LazyLoading extends LazyLoadingDisabled ? EagerCreator : LazyCreator

export declare const Creator: (new (init: ModelInit<Creator>) => Creator) & {
  copyOf(source: Creator, mutator: (draft: MutableModel<Creator>) => MutableModel<Creator> | void): Creator;
}