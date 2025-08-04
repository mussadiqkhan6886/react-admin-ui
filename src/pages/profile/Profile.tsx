import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { singleUser } from "../../data";
import "./profile.scss";
import { useMenuContext } from "../../hooks/MenuContext";

const Profile = () => {
  const item = singleUser;

   const {mode} = useMenuContext()
  
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
            {Object.entries(item.info).map(([key, value]) => (
              <div key={value} className="item">
                <span className="itemTitle">{key}:</span>
                <span className="itemValue">{value}</span>
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
            {item.activities.map((activity, index) => (
              <li key={index}>
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

export default Profile;