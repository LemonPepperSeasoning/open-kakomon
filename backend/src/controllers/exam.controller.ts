import { NextFunction, Request, Response } from 'express';

import httpStatus from 'http-status';

export const createExam = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
    console.log("Called : #createUser")
};

export const getExam = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<void> => {
    console.log("Called : #getExam")
};
