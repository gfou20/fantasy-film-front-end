import { Link } from 'react-router-dom'
import ProfileIcon from '../../assets/icons/profile.png'

const NavBar = ({ user, handleLogout }) => {
  const photo = user.profile.photo ? user.profile.photo : ProfileIcon
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <img src={photo} alt="The user's avatar" />
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/movie-search">Movie Search</Link></li>
          <li><Link to="/actor-search">Actor Search</Link></li>
          <li><Link to="/dreamcastlist">Dreamcasts</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/change-password">Change Password</Link></li>
        </ul>
      :
        <ul>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar
