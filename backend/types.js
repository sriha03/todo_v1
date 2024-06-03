import Zod from "zod";

const createTodo=Zod.object({
    title:Zod.string(),
    description:Zod.string()
})
const updateTodo=Zod.object({
    id:Zod.string()
})
export {createTodo,updateTodo}