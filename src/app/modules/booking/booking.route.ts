import { Router } from "express";
import {
  cancelBooking,
  createBooking,
  getAllBookings,
  getUserBookings,
} from "./booking.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/", auth("user"), createBooking);
router.get("/", getAllBookings);
router.get("/user", auth("user"), getUserBookings);
router.delete("/:id", cancelBooking);

export const BookingRoutes = router;
