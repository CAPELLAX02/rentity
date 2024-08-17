import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, 'Email already exists.'],
      required: [true, 'Email is required.'],
    },
    username: {
      type: String,
      required: [true, 'Username is required.'],
    },
    image: {
      type: String,
    },
    bookmarks: [
      {
        type: Schema.Types.ObjectId,
        ref: 'propertyModel',
      },
    ],
  },
  { timestamps: true }
);

const userModel = models.userModel || model('userModel', userSchema);

export default userModel;
