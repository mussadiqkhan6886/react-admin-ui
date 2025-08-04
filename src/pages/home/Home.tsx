import ChartBox from "../../components/chartsBox/ChartBox"
import TopBox from "../../components/topBox/TopBox"
import "./home.scss"
import {barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser} from "../../data"
import BarChartBox from "../../components/barChartBox/BarChartBox"
import PieChartBox from "../../components/pieChartBox/PieChartBox"
import BigChartBox from "../../components/bigChartBox/BigChartBox"
import ChartRadar from "../../components/radarChart/ChartRadar"
import { useContext } from "react"
import { MenuContext } from "../../Context/MenuContext"


const Home = () => {
  const light = {
    background: "whitesmoke",
    color: "black"
  }

  
  const {mode} = useContext(MenuContext)
  const navbarStyle = mode === "dark" ? {} : light;
  return (
    <div style={navbarStyle} className='home'>
     <div className={`${mode === "light" ? "light" : "box"}  box1`}>
        <TopBox />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box2`}>
      <ChartBox {...chartBoxUser} />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box3`}>
      <ChartBox {...chartBoxProduct} />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box4`}>
      <PieChartBox />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box5`}>
      <ChartBox {...chartBoxConversion} />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box6`}>
      <ChartBox {...chartBoxRevenue} />
      </div>
     <div className={`${mode === "light" ? "light" : "box"} box7`}>
      <BigChartBox />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box8`}>
      <BarChartBox {...barChartBoxVisit} />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box9`}>
      <BarChartBox {...barChartBoxRevenue} />
     </div>
     <div className={`${mode === "light" ? "light" : "box"} box10`}>
      <ChartRadar />
     </div>
    </div>
  )
}

export default Home
