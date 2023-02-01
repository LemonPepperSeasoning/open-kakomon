import mongoose, { Schema, model } from 'mongoose';

export interface ExamModel {
    id: string,
    year: string,
    major: string,
    schoolId: mongoose.ObjectId,
}

const schema = new Schema<ExamModel>({
    id: {type: String, required: true},
    year: { type: String, required: true },
    major: { type: String, required: true },
    schoolId: { type: mongoose.Types.ObjectId, required: true },
});

export default model<ExamModel>('Exam', schema);