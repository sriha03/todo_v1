import React from 'react'
import { useState } from 'react'

const CreateTodo = () => {
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
  return (
    <div>
        <input style={{
            padding:10,
            margin:10,
            border:"1px solid black",
            borderRadius:10,
            width:300
        }}type="text" placeholder='title'  onChange=
        {(e)=>setTitle(e.target.value)}
         />
        <br />
        <input style={{
            padding:10,
            margin:10,
            border:"1px solid black",
            borderRadius:10,
            width:300
        }} type="text" placeholder='description' onChange={
            (e)=>setDescription(e.target.value)}
         />
        <br />
        <button style={{padding:10,margin:10, borderRadius:10, color:"white", backgroundColor:"black"}} 
        onClick={()=>
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
        })               
                .then(async function(res){
                    const data = await res.json();
                    alert("todo added")
                })

            
        }
        >Add a todo</button>


    </div>
  )
}

export default CreateTodo