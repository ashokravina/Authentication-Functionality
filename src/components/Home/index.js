// Write your JS code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1 className="home-heading">Home Route</h1>
          <LogoutButton />
        </div>
      </>
    )
  }
}
export default Home
