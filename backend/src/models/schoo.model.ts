import mongoose, { Schema, model } from 'mongoose';

export interface SchoolModel {
    id: string,
    name: string,
    address: string,
}

const schema = new Schema<SchoolModel>({
    id: {type: String, required: true},
    name: { type: String, required: true },
    address: { type: String, required: true },
});

export default model<SchoolModel>('School', schema);