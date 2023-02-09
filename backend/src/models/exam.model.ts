import mongoose, { Schema, model } from "mongoose";

export interface ExamModel {
  id: string;
  year: string;
  major: string;
  schoolId: mongoose.ObjectId;
  visibility: boolean;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     Exam:
 *       type: object
 *       required:
 *         - id
 *         - year
 *         - schoolId
 *       properties:
 *         id:
 *           type: string
 *           description: The id of the exam
 *         year:
 *           type: string
 *           description: The year of exam
 *         major:
 *           type: string
 *           description: The major of school
 *         schoolId:
 *           type: string
 *           description: Whether you have finished reading the book
 *         visibility:
 *           type: boolean
 *           description: Whether the exam is visible to public
 *       example:
 *         id: e0001
 *         year: 2018
 *         major: Business
 *         schoolId: s0001
 *         visibility: true
 */
const schema = new Schema<ExamModel>({
  id: { type: String, required: true },
  year: { type: String, required: true },
  major: { type: String, required: true },
  schoolId: { type: mongoose.Types.ObjectId, required: true },
  visibility: { type: Boolean, required: true },
});

export default model<ExamModel>("Exam", schema);
