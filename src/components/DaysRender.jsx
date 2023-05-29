
import dayjs from 'dayjs';
import Chip from '@mui/material/Chip';



function DaysRender({from, to, blob}){

    
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
                if(blob.status.noTalk.includes(dateParsed)){
                    status = 'noTalk'
                }
                if (dayjs(date.toISOString().split('T')[0]).isAfter(dayjs())){
                    status = 'In'
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
