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
    this.props.getDailyData();

  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.data && this.props.dailyData ? (
          <>
            <Cards globalData={this.props.data} />
            <Picker />
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
    dailyData: state.dailyData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(actionTypes.gettingData()),
    getDailyData: ()=>dispatch(actionTypes.gettingDailyData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
