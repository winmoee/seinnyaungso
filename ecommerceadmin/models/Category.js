const { Schema, model, models } = require("mongoose");
import mongoose from "mongoose";

const CategorySchema = new Schema({
    name: {type:String, required:true},
    parent: {type:mongoose.Types.ObjectId, ref:'Category'},
});

export const Category = models?.Category || model('Category', CategorySchema);