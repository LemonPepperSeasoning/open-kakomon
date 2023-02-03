import mongoose, { Schema, model } from 'mongoose';

export interface ExamModel {
    id: string,
    year: string,
    major: string,
    schoolId: mongoose.ObjectId,
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
 *           description: The auto-generated id of the book
 *         year:
 *           type: string
 *           description: The title of your book
 *         major:
 *           type: string
 *           description: The book author
 *         schoolId:
 *           type: boolean
 *           description: Whether you have finished reading the book
 *       example:
 *         id: d5fE_asz
 *         year: The New Turing Omnibus
 *         major: Alexander K. Dewdney
 *         schoolId: false
 */
const schema = new Schema<ExamModel>({
    id: {type: String, required: true},
    year: { type: String, required: true },
    major: { type: String, required: true },
    schoolId: { type: mongoose.Types.ObjectId, required: true },
});

export default model<ExamModel>('Exam', schema);