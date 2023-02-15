import { Router } from "express";
import {
  createSchool,
  getSchool,
  getAllSchool,
} from "../controllers/school.controller";

const routes = Router();

/**
 * @swagger
 * tags:
 *   name: School
 *   description: The books managing API
 * /api/v1/school:
 *   post:
 *     summary: Create a new School
 *     tags: [School]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/School'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       500:
 *         description: Some server error
 *
 */
routes.post("/", createSchool);

/**
 * @swagger
 * tags:
 *   name: School
 *   description: The books managing API
 * /api/v1/school:
 *   get:
 *     summary: Get School with matching name
 *     tags: [School]
 *     parameters:
 *       - in: query
 *         name: english_name
 *         schema:
 *           type: string
 *         description: The name of the university in english
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       500:
 *         description: Some server error
 *
 */
routes.get("/", getSchool);

/**
 * @swagger
 * tags:
 *   name: School
 *   description: The books managing API
 * /api/v1/school/all:
 *   get:
 *     summary: Get all School
 *     tags: [School]
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/School'
 *       500:
 *         description: Some server error
 *
 */
routes.get("/all", getAllSchool);

export default routes;
