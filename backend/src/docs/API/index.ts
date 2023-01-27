import createExam from "./create-exam"
import deleteExam from "./delete-exam"
import getExam from "./get-exam"
import getExams from "./get-exams"

export default {
    paths:{
        '/todos':{
            ...createExam,
            ...getExams
        },
        '/todos/{id}':{
            ...getExam,
            ...deleteExam
        }
    }
}