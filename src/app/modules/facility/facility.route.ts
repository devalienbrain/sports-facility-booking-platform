import { Router } from "express";
import {
  createFacility,
  deleteFacility,
  getAllFacilities,
  updateFacility,
} from "./facility.controller";

const router = Router();

router.post("/", createFacility);
router.put("/:id", updateFacility);
router.delete("/:id", deleteFacility);
router.get("/", getAllFacilities);

export const FacilityRoutes = router;
