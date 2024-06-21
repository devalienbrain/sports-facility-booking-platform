import { Request, Response, NextFunction } from "express";
import { BookingService } from "./booking.service";

export const checkAvailability = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const date = req.query.date
      ? new Date(req.query.date as string)
      : new Date();
    const availableSlots = await BookingService.checkAvailability(
      date.toISOString().split("T")[0]
    );
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Availability checked successfully",
      data: availableSlots,
    });
  } catch (error) {
    next(error);
  }
};

export const createBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.user!;
    const bookingData = { ...req.body, user: userId };
    const booking = await BookingService.createBooking(bookingData);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking created successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookings = await BookingService.getAllBookings();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const getUserBookings = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bookings = await BookingService.getUserBookings(req.params.userId);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User bookings retrieved successfully",
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

export const cancelBooking = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const booking = await BookingService.cancelBooking(req.params.id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Booking canceled successfully",
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
