import express from "express";
import { FacilityControllers } from "./facility.controller";

const router = express.Router();

router.post("/", FacilityControllers.createFacility);
router.put("/:id", FacilityControllers.updateAFacility);
router.delete("/:id", FacilityControllers.deleteAFacility);
router.get("/", FacilityControllers.getAllFacilities);

export const FacilityRoutes = router;
