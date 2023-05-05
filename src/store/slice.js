import { createSlice } from '@reduxjs/toolkit'

import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetch3zzouz = createAsyncThunk('azzouz/fetch3zzouz', async (_,{dispatch}) => {
    try {
        
        const request = await fetch('/api/getJsonBlob')
        const response = await request.json()
        return response
    } catch (error) {
            setTimeout(()=>{ dispatch(fetchCat()) }, 100)

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