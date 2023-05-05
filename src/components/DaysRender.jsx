
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';

function DaysRender(from, to){

    function getDaysInMonthUTC({from, to}) {
        //console.log(from, to)
        var date = new Date(Date.UTC(2023, 1, 1))
        var days = []

        const dateParsed = date.toISOString().split('T')[0]


        while (!dayjs(dateParsed).isSame(to)) {

            if(
                dayjs(dateParsed).isAfter(from) ||
                dayjs(dateParsed).isSame(from) ||
                dayjs(dateParsed).isSame(to)
            ){
                days.push(new Date(date))
            }

            date.setUTCDate(date.getUTCDate() + 1)
        }
        console.log(days)
        return days
    
    }


    const daysToRender = getDaysInMonthUTC(from, to).map((el, i)=> 
        <div className='day-container' key={i}>
            
            <div className='day-date'>{el.toLocaleDateString('en-us', {month:'short',year:'numeric' , weekday:'long', day:'numeric',})}</div>
            <div className='day-status'> <Chip label="primary" color="error"/> </div>
            
        </div>
    )
    return(
        <div>
            {daysToRender}
        </div>
    )
}

export default DaysRender
