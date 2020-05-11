import React, { Component } from "react";
import classes from "./Picker.module.css";
import Container from "@material-ui/core/Container"

export class Picker extends Component {
  handleChange = (event) => {
    this.props.handleCountry(event.target.value);
  };

  render() {
    return (
      <Container>

      <div className={classes.formControl}>
        <label htmlFor="cars">Select Country: </label>

        <select id="cars" onChange={this.handleChange}>
          <option value="">Worldwide</option>
          {this.props.countries.map((country, index) => (
            <option key={index} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      </Container>
    );
  }
}

export default Picker;
