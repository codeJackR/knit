// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Creator } = initSchema(schema);

export {
  Creator
};