import mongoose from "mongoose";
mongoose.connect("mongodb+srv://sriharshinimns:admin@cluster0.0r1ssht.mongodb.net/todo");
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todo=mongoose.model("todo",todoSchema);

export {todo};
