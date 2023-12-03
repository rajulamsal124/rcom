'use client'
import { RiMapPin2Line } from "react-icons/ri"
import Topbar from "./Topbar/Topbar"
import NavBar from "./NavBar/NavBar"
import { FaCamera, FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
const Header:React.FC = () => {
  const handleSearchChange=(value:string)=>{
    console.log('Search value:', value);
  }
  return (
    <div>
    <Topbar
      icon={<RiMapPin2Line />}
      infoMessgae="Showing stock for delivery to south Brisbane, 4101"
    />
    <NavBar logo="Rcom"
    onSearchChange={handleSearchChange}
    searchPlaceholder="Search products & brands"
    rightMenuIcons={[
      <FaUser key="fa-user"/>,
      <FaShoppingCart key="fa-shoppingcart"/>,
      <FaHeart key="fa-heart"/>,
    ]}/>
    </div>
  )
}

export default Header