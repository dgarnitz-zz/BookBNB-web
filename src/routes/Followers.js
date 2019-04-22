import React from "react";
import Following from "../components/Following";
import UsersFollowers from "../components/UsersFollowers";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "../App.css";
import { read_cookie } from "sfcookies";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

class Followers extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="followers-tab-box">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="My Followers" />
            <Tab label="Who I Follow" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <UsersFollowers />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <Following />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default Followers;
