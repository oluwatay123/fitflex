import { Link } from "@mui/material";


function Header2() {
    return(
        <header className="header">
     <div className="Logo">
   <Link to= '/'>
    Fitflex
   </Link>
   
   
     </div>
    <ul>
      <li>
      <Link to= 'UserProfile'>
     <img  src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
     </Link>
        </li>  
        {/* <li> */}
      {/* <Link to='LoginPage'> */}
      {/* <AiOutlineUserAdd/> Register */}
      {/* </Link> */}
      {/* </li>   */}
    </ul>
    
    
        </header>
    )
    
    }
    
    export default Header2;