import { NavLink } from "react-router-dom";
import "./NavBar.css"

function NavBar(){ 
    return(
        <div className="d-flex p-2 bg-black  justify-content-between align-items-center"  >
            <div className="d-flex align-items-center gap-2">
            <img src="https://img.freepik.com/premium-photo/golden-rooster-head-black-background-generative-ai_1034044-5993.jpg" alt="" width={45} height={45} className="rounded-2"/>
            <h3 className="text-warning m-0" >Roster</h3>
            </div>
            <ul className="d-flex list-unstyled gap-5 align-items-center text-warning m-0 fs-4 px-2">
                <li className="nav-item "><NavLink className="nav-link" to='home'>Home</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='aboutus'>About us</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to='signin1'>Sign in</NavLink></li>
            </ul>
        </div>
    )
}
export default NavBar;