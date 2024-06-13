import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { FacilityServices } from "./facility.service";

const createFacility = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const facilityData = req.body;
    // console.log(req.body);
    // const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await FacilityServices.createFacilityIntoDB(facilityData);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Facility is created succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const FacilityControllers = {
  createFacility,
};
