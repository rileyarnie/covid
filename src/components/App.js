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
  }

  render() {
    console.log(this.props.data);
    return (
      <div className="App">
        <Header />
        <Cards  data={}/>

        <Picker />
        <Graph />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(actionTypes.gettingData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
