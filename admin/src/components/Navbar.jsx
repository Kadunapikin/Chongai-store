import {assets} from '../assets/assets'

const Navbar = () => {
  return (
    <div>
        <img src={assets.logo} alt="Forever Logo" />
        <button>Logout</button>
    </div>
  )
}

export default Navbar