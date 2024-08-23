// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="unordered-list">
    <li className="list">
      <Link to="/" className="link">
        Home
      </Link>
    </li>

    <li className="list">
      <Link to="/about" className="link">
        About
      </Link>
    </li>
  </ul>
)

export default Header
