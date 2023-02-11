import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import School, { SchoolModel } from "../models/schoo.model";
import httpStatus from "http-status";

export const createSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const school = new School({
    id: "Tokyo",
    year: "2022",
    major: "Business",
    schoolId: new ObjectId("4eb6e7e7e9b7f4194e000001"),
    visibility: true,
  });

  await school.save();

  console.log("Called : #createSchool");
};

export const getSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Called : #getSchool");
};
