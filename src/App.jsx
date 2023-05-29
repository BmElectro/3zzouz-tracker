import { useState, useEffect } from 'react'
import { DateField } from '@mui/x-date-pickers/DateField';
import Chip from '@mui/material/Chip';
import dayjs from 'dayjs';
import './App.css'

import DaysRender from './components/DaysRender';
import { fetch3zzouz } from './store/slice';
import { useDispatch, useSelector } from 'react-redux';
function App() {



  const [from, setFrom] = useState(dayjs('2023-05-01'))
  const [to, setTo] = useState(dayjs(new Date().toJSON().slice(0, 10)))
  const blob = useSelector(state => state.azzouz.blob)


      
  const dispatch = useDispatch()
  
  useEffect(()=>{
      console.log('asdas')
      dispatch(fetch3zzouz())
  },[])


  return (

    <div className="App">
      <nav>
        <div>
        <h2>3zzouz-Tracker</h2>
        <h3>Something like HiatusXHiatus but for 3zzouz</h3>
        </div>
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
      {/* <Chip label="primary" color="primary"/>
      <Chip label="primary" color="default"/>
      <Chip label="primary" color="error"/>
      <Chip label="primary" color="secondary"/>
      <Chip label="primary" color="info"/>
      <Chip label="primary" color="success"/>
      <Chip label="primary" color="warning"/> */}

      {blob.status ? <DaysRender from={from} to={to} blob={blob}/> : <></>}

      
    </div>
  )
}

export default App
