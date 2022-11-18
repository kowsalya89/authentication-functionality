// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-bg-container">
    <Link className="header-nav-link" to="/">
      <li>Home</li>
    </Link>

    <Link className="header-nav-link" to="/about">
      <li>About</li>
    </Link>
  </ul>
)

export default Header
