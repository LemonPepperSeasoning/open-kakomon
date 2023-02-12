import mongoose, { Schema, model } from "mongoose";

export interface ViewModel {
  school_id: string;
  count: number;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     View:
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
const schema = new Schema<ViewModel>({
  school_id: { type: String, required: true },
  count: { type: Number, required: true },
});

export default model<ViewModel>("View", schema);
