import { Schema, model, models } from 'mongoose';

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'userModel',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
    },
    beds: {
      type: Number,
      required: true,
    },
    baths: {
      type: Number,
      required: true,
    },
    square_feet: {
      type: Number,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    rates: {
      nightly: Number,
      weekly: Number,
      monthly: Number,
    },
    seller_info: {
      name: String,
      email: String,
      phone: String,
    },
    images: [
      {
        type: String,
      },
    ],
    is_feautured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const propertyModel =
  models.propertyModel || model('propertyModel', propertySchema);

export default propertyModel;
