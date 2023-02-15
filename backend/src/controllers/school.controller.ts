import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import School, { SchoolModel } from "../models/schoo.model";
import httpStatus from "http-status";
import schoolService from "../services/school.service";

import logger from "../utils/logger";

export const createSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  logger.info("POST /school request from frontend");
  try {
    const createdSchool = await schoolService.createSchool(req.body);
    res.status(httpStatus.CREATED).json(createdSchool).end();
  } catch (e) {
    next(e);
  }
};

export const getSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  logger.info("GET /school request from frontend");
  try {
    // TODO Implement
    const school = await schoolService.getSchoolWithName(
      req.query.english_name
    );
    res.status(httpStatus.OK).json(school).end();
  } catch (e) {
    next(e);
  }
};

export const getAllSchool = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  logger.info("GET /school request from frontend");
  try {
    // TODO Implement
    const schools = await schoolService.getAllSchools();
    res.status(httpStatus.CREATED).json(schools).end();
  } catch (e) {
    next(e);
  }
};
