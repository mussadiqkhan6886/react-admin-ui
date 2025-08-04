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

  const {menuBar} = useContext(MenuContext)
  return (
    menuBar && (<div className="menu">
      {menu.map((item: Item) => (
      <div key={item.id} className="item">
        <span className="title">{item.title.toUpperCase()}</span>
        {item.listItems.map((listItem: ListItem) => (
          <Link to={`${listItem.url}`} key={listItem.id} className="listItem">
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
