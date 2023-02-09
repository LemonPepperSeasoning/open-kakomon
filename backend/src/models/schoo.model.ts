import mongoose, { Schema, model } from "mongoose";

export interface SchoolModel {
  id: string;
  name: string;
  address: string;
  national_ranking: number;
  international_ranking: number;
  country: string;
  school_image_url: string;
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
 *           description: The auto-generated id of the university
 *         name:
 *           type: string
 *           description: The name of the univerity.
 *         address:
 *           type: string
 *           description: The address of the univeristy.
 *         national_ranking:
 *           type: string
 *           description: National ranking of this university.
 *         international_ranking:
 *           type: string
 *           description: International ranking of this university.
 *         country:
 *           type: string
 *           description: The country where the school is located.
 *         school_image_url:
 *           type: string
 *           description: The url to s3 bucket where school image is stored.
 *       example:
 *         id: u0001
 *         name: University of Tokyo
 *         address: 1 tokyo, Tokyo, Japan
 *         national_ranking: 1
 *         international_ranking: 20
 *         country: Japan
 *         school_image_url: s3://bucket_url.com
 */
const schema = new Schema<SchoolModel>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  national_ranking: { type: Number, required: true },
  international_ranking: { type: Number, required: true },
  country: { type: String, required: true },
  school_image_url: { type: String, required: true },
});

export default model<SchoolModel>("School", schema);
