
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';
import { useDispatch } from 'react-redux';
import { updateChart } from '../store/chartSlice'



function DaysRender({from, to, blob}){

    const dispatch = useDispatch()
    
    const renderLabel = (status) => {
        if (status == 'joined') {
            return <div className='day-status'> <Chip label="Joined" color="success"/> </div>
        }
        else if (status == 'noTalk'){
            return <div className='day-status'> <Chip label="Joined but didn't talk" color="warning"/> </div>
        }else if (status == 'In'){
            return <div className='day-status'> <Chip label="Day in future" color="default"/> </div>
        }else{
            return <div className='day-status'> <Chip label="Didn't Join" color="error"/> </div> 
        }
    } 
    

    const daysToRender = getDaysInMonthUTC(from, to).map((el, i)=> 
        <div className='day-container' key={i}>
            
            <div className='day-date'>{el.date.toLocaleDateString('en-us', {month:'short',year:'numeric' , weekday:'long', day:'numeric',})}</div>
            {renderLabel(el.status)}
        </div>
    )


    function getDaysInMonthUTC(from, to) {

        console.log(';asdfdas')
        var date = new Date(Date.UTC(2023, 1, 1))
        var days = []

        let chartObj = {noTalk:0, no:0, yes:0}


        while (!dayjs(date.toISOString().split('T')[0]).isAfter(to)) {
            const dateParsed = date.toISOString().split('T')[0]

            if(
                dayjs(dateParsed).isAfter(from) ||
                dayjs(dateParsed).isSame(from) ||
                dayjs(dateParsed).isSame(to)
            ){
                let status = ''
                if(blob.status.joined.includes(dateParsed)){
                    status = 'joined'
                    chartObj.yes++
                }
                if(blob.status.noTalk.includes(dateParsed)){
                    status = 'noTalk'
                    chartObj.noTalk++
                }
                if (dayjs(date.toISOString().split('T')[0]).isAfter(dayjs())){
                    status = 'In'
                }
                else{
                    chartObj.no++
                }
                days.push({date: new Date(date), status:status})
            }

            date.setUTCDate(date.getUTCDate() + 1)
        }
        dispatch(updateChart(chartObj))

        return days
    
    }




    return(
        <div className='all-days-continer' >
            {daysToRender}
        </div>
    )
}

export default DaysRender
