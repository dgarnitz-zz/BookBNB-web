import React from 'react';
import {NavLink} from 'react-router-dom';

class MenuBar extends React.Component {

    state = {loggedIn: false};

    ConditionalRender = () => {
        if (this.state.loggedIn){
            return (
                <div className="ui teal secondary pointing menu">
                    <NavLink to="/mybooks" className="item">My Books</NavLink>
                    <NavLink to="/books" className="item">Browse</NavLink>
                    <div className="right menu" style={{marginTop: 10, marginBottom: 5}}>
                        <div class="ui labeled icon buttons mini">
                            <button class="ui primary basic button"><i class="user icon"></i>Profile</button>
                        </div>
                    </div>
                </div>
            );
        }
        
        return (
            <div className="ui teal secondary pointing menu">
                <NavLink to="/books" className="item">Browse</NavLink>
                <div className="right menu" style={{marginTop: 10, marginBottom: 5}}>
                    <NavLink to="/login"><button className="ui primary basic mini button">Register</button></NavLink>
                    <NavLink to="/login"><button className="ui basic mini button">Login</button></NavLink>
                </div>
            </div>
        );
        
    }

    render(){
        return this.ConditionalRender();
    }
}

export default MenuBar;