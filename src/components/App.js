import React, { Component } from "react";
import Header from "./Header";
import Graph from "../containers/graph/Graph";
import Picker from "../containers/picker/Picker";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions/actionTypes";
import Cards from "../containers/cards/Cards";

class App extends Component {
  componentDidMount() {
    this.props.getData();
    this.props.getCountries();
    this.props.getDailyData();
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.data &&
        this.props.dailyData &&
        this.props.countries.length !== 0 ? (
          <>
            <Cards globalData={this.props.data} />
            <Picker countries={this.props.countries} />
            <Graph dailyData={this.props.dailyData} />
          </>
        ) : (
          <p>Loading....</p>
        )}
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
    getData: () => dispatch(actionTypes.gettingData()),
    getDailyData: () => dispatch(actionTypes.gettingDailyData()),
    getCountries: () => dispatch(actionTypes.gettingCountries()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
