import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";
import catchAsync from "../../utils/catchAsync";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingData = req.body;
    console.log(req.body);
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await BookingServices.createBookingIntoDB(bookingData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Booking created succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllBookings = catchAsync(async (req, res) => {
  const result = await BookingServices.getAllBookingsFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Bookings retrieved successfully",
    data: result,
  });
});

const cancelBooking = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BookingServices.cancelBookingFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking cancelled succesfully",
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
  getAllBookings,
  cancelBooking,
};
