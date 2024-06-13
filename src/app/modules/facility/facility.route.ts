import express from "express";
import { FacilityControllers } from "./facility.controller";

const router = express.Router();

router.post("/create-facility", FacilityControllers.createFacility);

export const FacilityRoutes = router;
