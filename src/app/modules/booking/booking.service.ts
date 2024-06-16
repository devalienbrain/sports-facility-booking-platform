import { TBooking } from "./booking.interface";
import { BookingModel } from "./booking.model";

const createBookingIntoDB = async (bookingData: TBooking) => {
  // create a booking
  const newBooking = await BookingModel.create(bookingData);
  return newBooking;
};

const getAllBookingsFromDB = async (query: Record<string, unknown>) => {
  // const courseQuery = new QueryBuilder(
  //   FacilityModel.find(),
  //   // .populate('preRequisiteCourses.course'),
  //   query
  // )
  //   .search(CourseSearchableFields)
  //   .filter()
  //   .sort()
  //   .paginate()
  //   .fields();

  const result = await BookingModel.find();
  return result;
};

const cancelBookingFromDB = async (id: string) => {
  const result = await BookingModel.findByIdAndUpdate(
    id,
    { isBooked: false },
    {
      new: true,
    }
  );
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
  getAllBookingsFromDB,
  cancelBookingFromDB,
};
