import React from 'react';
import {Link} from 'react-router-dom';

class MenuBar extends React.Component {

    render(){
        return (
            <div className="ui teal secondary pointing menu">
                <Link to="/books" className="item">Browse</Link>
                <div className="right menu">
                    <Link to="/login"><button className="ui primary basic small button">Register</button></Link>
                    <Link to="/login"><button className="ui basic small button">Login</button></Link>
                </div>
            </div>
        );
    }
}

export default MenuBar;