import React from "react";
import { NavLink, Link} from 'react-router-dom';


const Header = () => {
    
    return (
        <div className="header">
            <div className="header-title">
                <div className="logo">
                    <img src="logo.png" alt="" />
                </div>
                <h4>Automatic Changeover Switch</h4>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/data'>Control</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
        </div>
    )
}
export default Header;