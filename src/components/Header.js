import React from 'react';
import {NavLink} from 'react-router-dom';


const Header = () => {
    return (
        <div>
        <header>
          <h1>Depensify</h1>
        </header>
        <ul>
            <li><NavLink exact={true} to="/" activeClassName="is-active">Home page</NavLink></li>
            <li><NavLink to="/create" activeClassName="is-active">Create Expenses</NavLink></li>
            <li><NavLink to="/help" activeClassName="is-active">Help Page </NavLink></li>
        </ul>
        </div>
    );
};

export default Header;