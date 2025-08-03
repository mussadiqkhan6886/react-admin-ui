import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, ResponsiveContainer, Tooltip } from "recharts";
import { RadarChart } from "recharts";
import { RadarData } from "../../data";
import "./radarChart.scss";

const ChartRadar = () => {
  return (
    <div className="radarChart">
      <h1></h1>
      <div className="chart">
        <ResponsiveContainer width={"99%"} height={250}>
            <RadarChart outerRadius={90} data={RadarData}>
                <PolarGrid />
                <Tooltip />
                <PolarAngleAxis dataKey="product" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartRadar;
