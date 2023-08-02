import {Link } from "react-router-dom"
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { AiOutlineUserAdd } from 'react-icons/ai';
import "../Login.css"

function Header() {
return(
    <header className="header">
 <div className="Logo">
    <Link to= 'LoginPage'>Fitflex</Link>
 </div>
<ul>
  <li>
    <Link to='signIn'>
        <FaUser/> Login
    </Link>
    </li>  
    <li>
  <Link to='LoginPage'>
  <AiOutlineUserAdd/> Register
  </Link>
  </li>  
</ul>


    </header>
)

}

export default Header;