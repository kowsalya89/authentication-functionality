// Write your JS code here
import Header from '../Header'
import LogoutButton from '../LogoutButton'
import './index.css'

const Home = () => (
  <div className="home-bg-container">
    <Header />
    <h1 className="home-header">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
