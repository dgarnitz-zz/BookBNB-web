import React from 'react';
import Axios from 'axios';

class Profile extends React.Component {

    state = {email: "", name: "", city: ""}

    componentDidMount(){
        this.getUserData();
    }

    getUserData = async (term) => {

        const response = await Axios.post(
            "http://localhost:8080/profile",
            {
                email: "test@amakepeace.com"
            }
        );

        console.log(response.data.results);
    }

    render() {
        return <div>Profile Page</div>
    }

}

export default Profile;