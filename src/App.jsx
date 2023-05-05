import { useState } from 'react'
import { DateField } from '@mui/x-date-pickers/DateField';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';
import './App.css'

import DaysRender from './components/DaysRender';
function App() {



  const [from, setFrom] = useState(dayjs('2023-05-01'))
  const [to, setTo] = useState(dayjs('2023-05-02'))



  return (

    <div className="App">
      <nav>
        <DateField
          label="From"
          value={from}
          onChange={(newValue) => setFrom(newValue)}
          format="LL"
        />
        <DateField
          label="To"
          value={to}
          onChange={(newValue) => {setTo(newValue)}}
          format="LL"
        />
      </nav>
      <Chip label="primary" color="primary"/>
      <Chip label="primary" color="default"/>
      <Chip label="primary" color="error"/>
      <Chip label="primary" color="secondary"/>
      <Chip label="primary" color="info"/>
      <Chip label="primary" color="success"/>
      <Chip label="primary" color="warning"/>


      <DaysRender from={from} to={to}/>
      
    </div>
  )
}

export default App
