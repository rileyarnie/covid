import React, { Component } from "react";
import { Line, Pie } from "react-chartjs-2";
import styles from "./Graph.module.css";

export class Graph extends Component {
  render() {
    const lineChart = this.props.dailyData ? (
      <div className={styles.container}>
        <Line
          options={{ maintainAspectRatio: false }}
          data={{
            labels: this.props.dailyData.map((date) => date.reportDate),
            datasets: [
              {
                data: this.props.dailyData.map((value) => value.totalConfirmed),
                backgroundColor: "rgba(22, 22, 196, 0.671)",
                label: "Infections",
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
    ) : null;
    const pieChart = (
      <div>
        <Pie className={styles.pieChart}
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(22, 22, 196, 0.671)",
                  "rgba(75, 236, 11, 0.671)",
                  "rgba(240, 12, 12, 0.747)",
                ],
                data: [
                  this.props.globalData.confirmed.value,
                  this.props.globalData.recovered.value,
                  this.props.globalData.deaths.value,
                ],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: {
              display: true,
              text: `Situation in ${this.props.country}`,
            },
          }}
        />
      </div>
    );

    return <>{this.props.country ? pieChart : lineChart}</>;
  }
}

export default Graph;
