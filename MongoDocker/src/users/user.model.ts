import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})

export interface User extends mongoose.Document {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}