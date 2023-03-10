// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CreatorDetails, Creator } = initSchema(schema);

export {
  CreatorDetails,
  Creator
};