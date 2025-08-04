import "./navbar.scss"
import { useContext, useState } from "react"
import { notifications } from "../../data"
import { Link } from "react-router-dom"
import { MenuContext } from "../../Context/MenuContext"

const NavBar = () => {
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const {menuBar, setMenuBar} = useContext(MenuContext)
  return (
    <div className="navbar">
      <div className="logo">
        <img onClick={() => setMenuBar(!menuBar)} src="/logo.svg" alt="logo" />
        <span>MkAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon search" className="icon" />
        <img src="/app.svg" alt="app img" className="icon" />
        <img src="/expand.svg" alt="expand img" className="icon" />
        <div className="notification">
          <img onClick={() => {setNotification(!notification)
            setProfile(false)
          }} src="/notifications.svg" alt="notification logo" />
          <span></span>
          {notification && (<div className="notificationDiv">
            <div className="messages">
              <h2>Messages</h2>
              <div className="messageList">
                {notifications.map(message => (
                  <div className="message" key={message.header}>
                    <img src={message.img} alt="user message img profile" />
                    <div>
                      <h4>{message.header}</h4>
                      <p>{message.msg}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button>Show All Messages</button>
            </div>
          </div>)}
        </div>
        <div className="user">
          <img onClick={() => {setProfile(!profile)
            setNotification(false)
          }} src="/user.jpg" alt="user profile img" />
          <span>Mussadiq</span>
          {profile && (<div className="profileDiv">
            <div className="profile">
              <h2>User Profile</h2>
              <div className="profileData">
                <div className="topData">
                  <img src="./user.jpg" alt="user message img profile" />
                  <div className="details">
                    <h5>Mussadiq Khan</h5>
                    <p className="admin">Administrator</p>
                    <p className="email">mussadiqkhan6886@gmail.com</p>
                  </div>
                </div>
                <div className="buttons">
                   <Link to={"/profile"} onClick={() => setProfile(false)}>
                    <button>
                      <img src="./user.svg" alt="user logo" />
                      <h6>My Profile</h6>
                    </button>
                   </Link>
                   <button>
                    <img src="./post2.svg" alt="user logo" />
                    <h6>My Inbox</h6>
                   </button>
                   <Link to={"/kanban"} onClick={() => setProfile(false)}>
                    <button>
                      <img src="./order.svg" alt="user logo" />
                      <h6>My Tasks</h6>
                    </button>
                   </Link>
                </div>
              </div>
              <Link to={"/login"}>
                <button>
                  Log Out
                </button>
              </Link>
            </div>
          </div>)}
        </div>
        <img src="/settings.svg" alt="setting" className="icon" />
      </div>
    </div>
  )
}

export default NavBar
