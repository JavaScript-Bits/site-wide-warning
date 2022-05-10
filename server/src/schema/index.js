import {SchemaComposer} from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import {UserQuery, UserMutation} from './user';
import {
  AppWarningQuery,
  AppWarningMutation,
} from './warning';

schemaComposer.Query.addFields({
  ...UserQuery,
  ...AppWarningQuery,
});

schemaComposer.Mutation.addFields({
  ...UserMutation,
  ...AppWarningMutation,
});

export default schemaComposer.buildSchema();
