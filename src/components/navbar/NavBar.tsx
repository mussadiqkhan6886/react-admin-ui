import "./navbar.scss"
import { useState } from "react"
import { notifications } from "../../data"
import { Link } from "react-router-dom"
import { useMenuContext } from "../../hooks/MenuContext"

const NavBar = () => {
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  
  const {menuBar, setMenuBar, mode, setMode} = useMenuContext()
  const [setting, setSetting] = useState(false)

 const light = {
   background: "white",
    color: "black"
  }
  const not = {
     background: "rgb(241, 241, 241)",
    color: "black"
  }
  const navbarStyle = mode === "dark" ? {} : light;
  const notDiv = mode === "dark" ? {} : not;
  return (
    <div className="navbar" style={navbarStyle}>
      <div className="logo">
        <img onClick={() => setMenuBar(!menuBar)} src="/logo.svg" alt="logo" />
        <span>MkAdmin</span>
      </div>
      <div  className="icons">
        <i className="fa-solid fa-search icon"></i>
        <i className="fa-solid fa-expand icon"></i>
        <div className="notification">
          <i style={{cursor: "pointer"}} onClick={() => {setNotification(!notification)
            setProfile(false)
          }} className="fa-solid fa-bell"></i>
          <span></span>
          {notification && (<div style={notDiv} className="notificationDiv">
            <div className="messages">
              <h2>Messages</h2>
              <div className="messageList">
                {notifications.map(message => (
                  <div className="message" key={message.header}>
                    <img src={message.img} alt="user message img profile" />
                    <div>
                      <h4>{message.header}</h4>
                      <p style={mode == "light" ? {color: "gray"} : {}}>{message.msg}</p>
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
          {profile && (<div className={`${mode === "light" ? "lightP" : "darkP"} profileDiv`}>
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
                    <button className={`${mode === "light" ? "buttonL" : "buttonD"}`}>
                      <img src="./user.svg" alt="user logo" />
                      <h6>My Profile</h6>
                    </button>
                   </Link>
                   <button className={`${mode === "light" ? "buttonL" : "buttonD"}`}>
                    <img src="./post2.svg" alt="user logo" />
                    <h6>My Inbox</h6>
                   </button>
                   <Link to={"/kanban"} onClick={() => setProfile(false)}>
                    <button className={`${mode === "light" ? "buttonL" : "buttonD"}`}>
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
        <i style={{cursor: "pointer"}} className="fa-solid fa-gear" onClick={() => setSetting(true)}></i>
      </div>
      {setting && (
        <div style={mode == "dark" ? {color: "white", background: "navy"} : {}} className="settingMenu">
          <h1>Choose Mode</h1>
          <p onClick={() => setSetting(false)}>x</p>
          <div className="modeSetting">
            <div>
              {/* icon */}
              <i className="fa-solid fa-moon"></i>
              <span onClick={() => setMode("dark")}> Dark Mode</span>
            </div>
            <div>
              {/* icon */}
              <i className="fa-solid fa-sun"></i>
              <span onClick={() => setMode("light")}> Light Mode</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBar
