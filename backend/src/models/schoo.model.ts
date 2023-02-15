import mongoose, { Schema, model } from "mongoose";

export interface SchoolModel {
  english_name: string;
  japanese_name: string;
  address: {
    postal_code: string;
    address: string;
  };
  type: string;
  deviation_value: string;
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
 *         - english_name
 *       properties:
 *         english_name:
 *           type: string
 *           description: The name of the univerity.
 *         japanese_name:
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
 *         type:
 *           type: string
 *           description: School type (i.e, public, private, national).
 *         deviation_value:
 *           type: string
 *           description: deviation value of the school.
 *
 *       example:
 *           type: 国立
 *           national_ranking: 1
 *           deviation_value: 75.0
 *           internationl_ranking: 23
 *           english_name: The University of Tokyo
 *           japanese_name: 東京大学
 *           address:
 *             postal_code: 〒113-8654
 *             address: 東京都文京区本郷７丁目３−１
 *           website_url: https://www.u-tokyo.ac.jp/ja/index.html
 *           country: Japan
 */
const schema = new Schema<SchoolModel>({
  english_name: { type: String, required: true },
  japanese_name: { type: String, required: true },
  address: {
    postal_code: { type: String, required: false },
    address: { type: String, required: false },
  },
  type: { type: String, required: false },
  national_ranking: { type: Number, required: false },
  international_ranking: { type: Number, required: false },
  country: { type: String, required: true },
  website_url: { type: String, required: true },
  school_image_url: { type: String, required: false },
});

export default model<SchoolModel>("School", schema);
