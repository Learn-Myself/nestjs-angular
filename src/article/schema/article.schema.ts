import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    description: {type: String, required: true},
    content: {type: String, required: true},
    updateAt: {type: Date, default: Date.now()},
});