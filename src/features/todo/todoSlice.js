import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,
        text:"hello world"}]
}

const todoSlise=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
                const todo={id:1,
                text:"hello world"}
        },
        removeTodo: ()=>{}
    }
})