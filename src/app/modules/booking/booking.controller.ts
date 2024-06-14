import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { BookingServices } from "./booking.service";

const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookingData = req.body;
    // console.log(req.body);
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

export const BookingControllers = {
  createBooking,
};
