
import { NavLink } from "react-router-dom";
import websites from '../Images/web.png';
import internet from '../Images/internet.png'
import graph from '../Images/trend.png';
import setting from '../Images/settings.png'
import logout from '../Images/logout.png'
function Navbar() {
    return (
        <div>
            <div className="Container ">
                <div className="">
                    <h3 className=" mt-3">Dashboard</h3>
                </div>
                <hr className="h-line" />
                {/* Navbar Start */}
                <div className=" navlink" >
                    <ul className="navigation list">
                        <li className="mt-3"><img src={websites} alt="" className="imgs" /><NavLink className="listlink" to="/Dashboard">Websites</NavLink>  </li>
                        <li className="mt-3"><img src={internet} alt="" className="imgs" /><NavLink className="listlink" to="#">Track Single Link</NavLink></li>
                        <li className="mt-3"><img src={graph} alt="" className="imgs" /><NavLink className="listlink" to="/Graph">Graphs</NavLink></li>
                        <li className="mt-3"><img src={setting} alt="" className="imgs" /><NavLink className="listlink" to="#">Settings</NavLink></li>
                    </ul>

                </div>
                {/* Navbar End */}
                <div className=" last-link">
                    <ul className="navigation list  logout">
                        <li className="mt-3"><img src={logout} alt="" className="imgs" /><NavLink className="listlink" to="#">Logout</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Navbar;