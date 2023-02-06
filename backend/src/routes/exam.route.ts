import { Router } from 'express';
import { createExam, getExam } from '../controllers/exam.controller';

const routes = Router();

/**
* @swagger
* tags:
*   name: Exam
*   description: The books managing API
* /exam:
*   post:
*     summary: Create a new exam
*     tags: [Books]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Exam'
*     responses:
*       200:
*         description: The created book.
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Exam'
*       500:
*         description: Some server error
*
*/
routes.post('/', createExam);


/**
 * @swagger
 * tags:
 *   name: Exam
 *   description: The books managing API
 * /exam:
 *   get:
 *     summary: Create a new exam
 *     tags: [Books]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Exam'
 *     responses:
 *       200:
 *         description: The created book.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Exam'
 *       500:
 *         description: Some server error
 *
 */
routes.get('/', createExam);

export default routes;
