import mongoose, { Schema, model } from 'mongoose';

export interface SchoolModel {
    id: string,
    name: string,
    address: string,
}

/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - id
 *         - name
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         name:
 *           type: string
 *           description: The title of your book
 *         address:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         name: The New Turing Omnibus
 *         address: Alexander K. Dewdney
 */
const schema = new Schema<SchoolModel>({
    id: {type: String, required: true},
    name: { type: String, required: true },
    address: { type: String, required: true },
});

export default model<SchoolModel>('School', schema);