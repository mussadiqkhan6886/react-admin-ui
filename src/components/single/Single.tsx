import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./single.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { MenuContext } from "../../Context/MenuContext";

type InfoType = {
  username: string;
  fullname: string;
  email: string;
  phone: string;
  status: string;
};

type ChartType = {
  dataKeys: {
    name: string;
    color: string;
  }[];
  data: {
    name: string;
    [key: string]: number | string;
  }[];
};

type ActivityType = {
  text: string;
  time: string;
};

type ItemType = {
  id: number;
  title: string;
  img: string;
  price?: number;
  info: InfoType;
  chart?: ChartType;
  activities?: ActivityType[];
};

type Props = {
  data: ItemType[];
};

const Single = ({ data }: Props) => {
  const { id } = useParams<{ id: string }>();
  const itemId = Number(id);
  const item = data.find((i) => i.id === itemId);

  if (!item) return <div>Item not found</div>;

  const {mode} = useContext(MenuContext)

  const light = {
    background: "rgb(243 244 246)",
    color: "black"
  }

  const navbarStyle = mode === "dark" ? {} : light;

  return (
    <div style={navbarStyle} className="single">
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={item.img} alt="item image" />
            <h1>{item.title}</h1>
          </div>
          <div className="details">
            {Object.entries(item.info).map((itemValue) => (
              <div className="item" key={itemValue[0]}>
                <span className="itemTitle">{itemValue[0]}:</span>
                <span className="itemValue">{itemValue[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr />
        {item.chart && (
          <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
              <LineChart
                data={item.chart.data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {item.chart.dataKeys.map((dataKey) => (
                  <Line
                    key={dataKey.name}
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {item.activities && (
          <ul>
            {item.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
