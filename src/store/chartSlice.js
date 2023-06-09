import { createSlice } from '@reduxjs/toolkit'


const chartSlice = createSlice({
    name: 'chart',
    initialState: {chart:{values: [], labels:[], colors:[]} },
    reducers:{
        updateChart: (state, action) => { 
            let newObj = {values: [], labels:[], colors:[]}
            for( const [key, value] of Object.entries(action.payload )){
                if(key == 'noTalk'){
                    newObj.labels.push("Didn't talk")
                    newObj.values.push(value)
                    newObj.colors.push('#f9ad32')
                }
                if(key == 'no'){
                    newObj.labels.push("Didn't join")
                    newObj.values.push(value)
                    newObj.colors.push('#ef4d3a')
                }
                if(key == 'yes'){
                    newObj.labels.push("joined")
                    newObj.values.push(value)
                    newObj.colors.push('#65bd6c')
                }
            }
            console.log(newObj)
            
            state.chart =  newObj
        }
    }
})

export const { updateChart } = chartSlice.actions

export default chartSlice.reducer