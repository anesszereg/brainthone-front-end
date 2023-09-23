import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    registerInfo:{ 
        email:"",
        firstname:"",
        lastname:"",
        password:"",
        phone:""
    }
}

const registerSlice = createSlice({
    name:"register",
    initialState,
    reducers:{
        setRegister: (state, action) =>{
            state.registerInfo= action.payload
        }
    }
})

export const {setRegister} = registerSlice.actions

export default registerSlice.reducer

