import "./navbar.scss"

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>MkAdmin</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="icon search" className="icon" />
        <img src="/app.svg" alt="app img" className="icon" />
        <img src="/expand.svg" alt="expand img" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification logo" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="/user.jpg" alt="user profile img" />
          <span>Mussadiq</span>
        </div>
        <img src="/settings.svg" alt="setting" className="icon" />
      </div>
    </div>
  )
}

export default NavBar
