import { Link } from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data"
import { useContext } from "react"
import { MenuContext } from "../../Context/MenuContext"

const Menu = () => {

  type ListItem = {
    id: number
    title: string
    url: string
    icon: string
  }

  type Item = {
    id: number,
    title: string,
    listItems: ListItem[]
  }

  const {menuBar, mode} = useContext(MenuContext)

 const light = {
    background: "white",
    color: "black"
  }

  const navbarStyle = mode === "dark" ? {} : light;
  return (
    menuBar && (<div style={navbarStyle} className="menu">
      {menu.map((item: Item) => (
      <div key={item.id} className="item">
        <span style={mode == "light" ? {color: "black"} : {}}  className="title">{item.title.toUpperCase()}</span>
        {item.listItems.map((listItem: ListItem) => (
          <Link to={`${listItem.url}`} key={listItem.id} className={`${mode === "light" ? "light" : "listItem"} mutual`}>
            <img src={listItem.icon} alt="icon" />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
        ))}
      </div>
      ))}
    </div>)
  )
}

export default Menu
