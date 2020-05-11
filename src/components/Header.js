import React, { Component } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

class Header extends Component {
  render() {
    return (
      <div className="mt-3">
        <AppBar position='static'>
          <Toolbar>
            <Typography variant="h6">COVID-19 UPDATES</Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
