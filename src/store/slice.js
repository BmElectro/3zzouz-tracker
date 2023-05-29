import { createSlice } from '@reduxjs/toolkit'

import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetch3zzouz = createAsyncThunk('azzouz/fetch3zzouz', async (_,{dispatch}) => {
    try {
        console.log('sdfdsfas')
        
        const request = await fetch('/api/getJsonBlob')
        const response = await request.json()
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
            setTimeout(()=>{ dispatch(fetch3zzouz()) }, 100)

    }

})





const zzouzSlice = createSlice({
    name: '3zzouz',
    initialState: {blob:''},
    extraReducers: (builder) => {
        builder.addCase(fetch3zzouz.fulfilled, (state, action) => {
            if(action.payload){
                state.blob = action.payload
                console.log(action.payload)
            }
        })
      },
})



export default zzouzSlice.reducer