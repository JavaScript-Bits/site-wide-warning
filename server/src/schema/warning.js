import {AppWarningTC} from '../models/appWarning';

const AppWarningQuery = {
  appWarningOne: AppWarningTC.getResolver('findOne'),
};

const AppWarningMutation = {
  appWarningCreateOne: AppWarningTC.getResolver('createOne'),
  appWarningRemoveMany: AppWarningTC.getResolver('removeMany'),
};

export {AppWarningQuery, AppWarningMutation};
