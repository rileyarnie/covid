import React, { Component } from "react";
import Header from "./Header";
import Graph from "../containers/graph/Graph";
import Picker from "../containers/picker/Picker";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import Cards from "../containers/cards/Cards";
import { RotateCircleLoading } from "react-loadingg";

class App extends Component {
  state = {
    country: "",
  };

  componentDidMount() {
    this.props.getData();
    this.props.getCountries();
    this.props.getDailyData();
  }

  handleCountry = (country) => {
    this.setState({ country: country });
    this.props.getData(country);
  };

  render() {
    return (
      <div className="App ">
        <Header />
        <div className="container ">

        {this.props.data &&
        this.props.dailyData &&
        this.props.countries.length !== 0 ? (
          <>
            <Cards globalData={this.props.data} />
            <Picker
              handleCountry={this.handleCountry}
              countries={this.props.countries}
            />
            <Graph
              country={this.state.country}
              globalData={this.props.data}
              dailyData={this.props.dailyData}
            />
          </>
        ) : (
          <RotateCircleLoading />
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    dailyData: state.dailyData,
    countries: state.countries,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: (country) => dispatch(actionTypes.gettingData(country)),
    getDailyData: () => dispatch(actionTypes.gettingDailyData()),
    getCountries: () => dispatch(actionTypes.gettingCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
