import Single from "../../components/single/Single"
import { singleUser } from "../../data"

const Profile = () => {
  return (
    <div>
      <Single {...singleUser} />
    </div>
  )
}

export default Profile
