import express from "express";
import { BookingControllers } from "./booking.controller";

const router = express.Router();

router.post("/", BookingControllers.createBooking);
router.get("/", BookingControllers.getAllBookings);
// router.get("/user", FacilityControllers.getAllFacilities);
router.delete("/:id", BookingControllers.cancelBooking);

export const BookingRoutes = router;
