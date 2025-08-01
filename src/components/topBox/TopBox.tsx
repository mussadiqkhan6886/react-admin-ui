import {topDealUsers} from "../../data"
import "./topBox.scss"

const TopBox = () => {

    type User = {
        id: number
        img: string
        username: string
        email: string
        amount: string
    }

  return (
    <div className="topBox">
      <h1 className="heading">Top Deals</h1>
      {topDealUsers.map((user : User) => (
        <div key={user.id} className="user">
            <div className="userData">
                <img src={user.img} alt="user " />
                <div className="data">
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </div>
            </div>
            <div className="account">
                ${user.amount}
            </div>
        </div>
      ))}
    </div>
  )
}

export default TopBox
