import { NextFunction, Request, Response } from "express";
import { ObjectId } from "mongodb";
import Exam, { ExamModel } from "../models/exam.model";
import httpStatus from "http-status";

export const createExam = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const exam = new Exam({
    id: "Tokyo",
    year: "2022",
    major: "Business",
    schoolId: new ObjectId("4eb6e7e7e9b7f4194e000001"),
    visibility: true,
  });

  await exam.save();

  console.log("Called : #createExam");
};

export const userSubmitExam = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const exam = new Exam({
    id: "Tokyo",
    year: "2022",
    major: "Business",
    schoolId: new ObjectId("4eb6e7e7e9b7f4194e000001"),
    visibility: false,
  });

  await exam.save();

  console.log("Called : #userSubmitExam");
};

export const getExam = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  console.log("Called : #getExam");
};
