import { useContext } from "react";
import "./footer.scss"
import { MenuContext } from "../../Context/MenuContext";

const Footer = () => {
   const {mode} = useContext(MenuContext)
  
    const light = {
      background: "rgb(200 212 200)",
      color: "black"
    }
  
    const navbarStyle = mode === "dark" ? {} : light;
  return (
    <div style={navbarStyle} className="footer">
      <span>MkAdmin</span>
      <span>&copy; Mussadiq khan Admin Dashboard</span>
    </div>
  )
}

export default Footer
