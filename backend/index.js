import express from "express";
import { createTodo } from "./types.js";
import { updateTodo } from "./types.js";
import { todo } from "./db.js";
import cors from "cors";

const app=express();

const port=3000;

app.use(express.json());
app.use(cors());
app.get("/todos",async (req,res)=>{
   const todos= await todo.find({});
    res.json({
        todos
    })

    
})
app.post("/todo",async (req,res)=>{
    const createPayload=req.body;
    const response=createTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs"
        });
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})
app.put("/completed",async (req,res)=>{

    const response=updateTodo.safeParse(req.body);
    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs"
        });
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"todo updated"
    })

    
})

app.listen(port,()=>
    console.log(`server is running on port ${port}`)
)