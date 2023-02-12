import mongoose, { Schema, model } from "mongoose";

export interface SchoolModel {
  name: string;
  address: {
    postal_code: string;
    address: string;
  };
  national_ranking: number;
  international_ranking: number;
  country: string;
  website_url: string;
  school_image_url: string;
}

/**
 * @swagger
 * components:
 *   schemas:
 *     School:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the univerity.
 *         address:
 *           postal_code:
 *             type: string
 *             description: The postal code of the univeristy.
 *           address:
 *             type: string
 *             description: The address of the univeristy.
 *         national_ranking:
 *           type: string
 *           description: National ranking of this university.
 *         international_ranking:
 *           type: string
 *           description: International ranking of this university.
 *         country:
 *           type: string
 *           description: The country where the school is located.
 *         website_url:
 *           type: string
 *           description: The url of the school website.
 *         school_image_url:
 *           type: string
 *           description: The url to s3 bucket where school image is stored.
 *       example:
 *         name: University of Tokyo
 *         address:
 *           postal_code: 000-0000
 *           address: tokyo, Japan
 *         national_ranking: 1
 *         international_ranking: 20
 *         country: Japan
 *         website_url: google.com
 *         school_image_url: s3://bucket_url.com
 */
const schema = new Schema<SchoolModel>({
  name: { type: String, required: true },
  address: {
    postal_code: { type: String, required: false },
    address: { type: String, required: false },
  },
  national_ranking: { type: Number, required: true },
  international_ranking: { type: Number, required: true },
  country: { type: String, required: true },
  website_url: { type: String, required: true },
  school_image_url: { type: String, required: true },
});

export default model<SchoolModel>("School", schema);
