import { Router } from "express";
import {
  cancelBooking,
  createBooking,
  getAllBookings,
  getUserBookings,
} from "./booking.controller";

const router = Router();

router.post("/", createBooking);
router.get("/", getAllBookings);
router.get("/:userId", getUserBookings);
router.delete("/:id", cancelBooking);

export const BookingRoutes = router;
