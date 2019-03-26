import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import { AppBar } from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import "../App.css";

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

class Login extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <div className="login-tab-box">
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <LoginForm />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <RegisterForm />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default Login;
