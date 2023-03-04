import { Link } from 'react-router-dom'
import './index.css'
const Header1 = () => {
    return(
   
      <div className="blog-container">
        <h1 className="blog-title">IPL Information</h1>
        <ul className="nav-menu">
          <Link className="nav-link" to="/dashboard">
            <li>Dashboard</li>
          </Link>
          <Link className="nav-link" to="/register">
            <li>Register</li>
          </Link>
          
        </ul>
      </div>
   )
}
  
  export default Header1