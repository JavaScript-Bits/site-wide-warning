import mongoose, {Schema} from 'mongoose';
import timestamps from 'mongoose-timestamp';
import {composeWithMongoose} from 'graphql-compose-mongoose';

export const AppWarningSchema = new Schema({
  warning: {
    type: String,
    trim: true,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {
  collection: 'appWarning',
});

AppWarningSchema.plugin(timestamps);

AppWarningSchema.index({createdAt: 1, updatedAt: 1});

export const AppWarning = mongoose.model('AppWarning', AppWarningSchema);
export const AppWarningTC = composeWithMongoose(AppWarning);
