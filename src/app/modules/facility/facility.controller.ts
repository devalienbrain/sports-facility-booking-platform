import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse";
import { FacilityServices } from "./facility.service";
import { FacilityModel } from "./facility.model";
import QueryBuilder from "../../builder/QueryBuilder";
import catchAsync from "../../utils/catchAsync";

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
      message: "Facility added succesfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const updateAFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityServices.updateAFacilityIntoDB(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility updated succesfully",
    data: result,
  });
});

const deleteAFacility = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await FacilityServices.deleteFacilityFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facility deleted succesfully",
    data: result,
  });
});

const getAllFacilities = catchAsync(async (req, res) => {
  const result = await FacilityServices.getAllFacilitiessFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Facilities retrieved successfully",
    data: result,
  });
});

export const FacilityControllers = {
  createFacility,
  updateAFacility,
  deleteAFacility,
  getAllFacilities,
};
