import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class Graph extends Component {
  render() {
    console.log("Graph: ", this.props.dailyData);
    return (
      <div>
        <Line
          data={{
            labels: this.props.dailyData.map((date) => date.reportDate),
            datasets: [
              {
                data: this.props.dailyData.map((value) => value.totalConfirmed),
                backgroundColor: "rgba(22, 22, 196, 0.671)",
                label: "Infected",
                borderColor: "blue",
              },
              {
                data: this.props.dailyData.map((value) => value.deaths.total),
                backgroundColor: "rgba(240, 12, 12, 0.747)",
                label: "Deaths",
                borderColor: "red",
              },
            ],
          }}
        />
      </div>
    );
  }
}

export default Graph;
