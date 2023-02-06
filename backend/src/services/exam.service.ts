import Exam, { ExamModel } from "src/models/exam.model";

const createExam = async (examDetails: ExamModel) => {
  const exam = new Exam(examDetails);

  await exam.save();

  return exam;
};
