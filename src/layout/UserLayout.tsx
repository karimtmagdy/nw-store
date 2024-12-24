 
import { useNavigate } from 'react-router-dom'

const UserLayout = () => {
    const nav =useNavigate()
  return (
    <div>
      <h1>UserLayout</h1>
      <p>user</p>
      <button onClick={() => nav("/admin")}>admin</button>
    </div>
  )
}

export default UserLayout