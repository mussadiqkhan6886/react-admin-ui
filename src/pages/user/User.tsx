import Single from "../../components/single/Single"
import "./user.scss"
import { allUsers } from "../../data"

const User = () => {
  return (
    <div>
      <Single data={allUsers} />
    </div>
  )
}

export default User
