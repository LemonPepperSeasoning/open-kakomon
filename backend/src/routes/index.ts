import { Router } from "express";
import exam from "./exam.route";
import school from "./school.route";

const routes = Router();

routes.use("/v1/exam", exam);
routes.use("/v1/school", school);

export default routes;
