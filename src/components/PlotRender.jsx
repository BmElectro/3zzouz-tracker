import { useSelector } from 'react-redux';
import Plot from 'react-plotly.js';

function DaysRender(){
    const chartValues = useSelector(state => state.charts.chart)



    return(
      chartValues.values.length > 0 ?
        <Plot
          data={[
            {
              values:  chartValues.values,
              labels:  chartValues.labels,
              type: 'pie',
              sort:false
            },
          ]}
          layout={{width: 600, height: 400, paper_bgcolor:'#242424', title:{text:'asdasdas', font:{color:'white'}}, legend:{font:{color:'white'}}, colorway:chartValues.colors}}
          config={{displayModeBar: false}}
        />
        : null
    )
}

export default DaysRender