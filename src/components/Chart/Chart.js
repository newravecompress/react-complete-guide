import './Chart.css'
import ChartBar from './ChartBar'

export default function Chart (props) {
  const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value)
  const totalMax = Math.max(...dataPointsValues)

  return <div className="chart">
    {props.dataPoints.map(
      (dataPoint, idx) =>
        <ChartBar {...dataPoint}
                  maxValue={totalMax}
                  key={idx}
        />
    )}
  </div>
}