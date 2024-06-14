import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    facility: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    payableAmount: {
      type: Number,
      required: true,
    },
    isBooked: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const BookingModel = model<TBooking>("Booking", bookingSchema);
