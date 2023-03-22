import React from "react";
import { NavLink, Link} from 'react-router-dom';


const Header = () => {
    
    return (
        <div className="header">
            <div className="header-title">
                <h4>Automatic Changeover Switche</h4>
            </div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/data'>Control</NavLink>
            <NavLink to='/statistics'>Statistics</NavLink>
        </div>
    )
}
export default Header;