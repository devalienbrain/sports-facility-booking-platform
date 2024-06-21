import { Router } from "express";
import {
  createFacility,
  deleteFacility,
  getAllFacilities,
  updateFacility,
} from "./facility.controller";
import auth from "../../middlewares/auth";

const router = Router();

router.post("/", auth("admin"), createFacility);
router.put("/:id", updateFacility);
router.delete("/:id", deleteFacility);
router.get("/", getAllFacilities);

export const FacilityRoutes = router;
