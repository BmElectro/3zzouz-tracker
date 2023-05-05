
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';



function DaysRender({from, to, blob}){

    
    const daysToRender = getDaysInMonthUTC(from, to).map((el, i)=> 
        <div className='day-container' key={i}>
            
        <div className='day-date'>{el.date.toLocaleDateString('en-us', {month:'short',year:'numeric' , weekday:'long', day:'numeric',})}</div>
        {el.status == 'joined' ? 
            <div className='day-status'> <Chip label="Joined" color="success"/> </div> : 
            <div className='day-status'> <Chip label="Didn't Join" color="error"/> </div> 
        } 
        </div>
    )


    function getDaysInMonthUTC(from, to) {

        var date = new Date(Date.UTC(2023, 1, 1))
        var days = []


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
                }
                days.push({date: new Date(date), status:status})
            }

            date.setUTCDate(date.getUTCDate() + 1)
        }
        return days
    
    }




    return(
        <div className='all-days-continer' >
            {daysToRender}
        </div>
    )
}

export default DaysRender
