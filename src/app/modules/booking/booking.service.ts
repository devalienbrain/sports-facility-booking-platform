import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingIntoDB = async (bookingData: TBooking) => {
  // create a booking
  const newBooking = await BookingModel.create(bookingData);
  return newBooking;
};

export const BookingServices = {
  createBookingIntoDB,
};
