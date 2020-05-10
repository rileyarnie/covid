import React, { Component } from "react";
import classes from "./Picker.module.css";

export class Picker extends Component {
  handleChange = (event) => {
    console.log(event.target.value);
  };
  render() {

    return (
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
    );
  }
}

export default Picker;
