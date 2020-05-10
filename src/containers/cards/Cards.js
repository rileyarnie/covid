import React, { Component } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

class Cards extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="baseline"
        >
          <Card
            //   style={{ borderLeft: "solid 5px  rgba(22, 22, 196, 0.671)"}}
            className={cx(styles.infected)}
          >
            <CardContent>
              <Typography gutterBottom>Total Infections:</Typography>
              <Typography color="textSecondary">
                <CountUp
                  separator=","
                  duration={3}
                  end={this.props.globalData.confirmed.value}
                />
              </Typography>
              <Typography gutterBottom>Last Updated On:</Typography>
              <Typography color="textSecondary">
                {new Date(this.props.globalData.lastUpdate).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          <Card className={cx(styles.recovered)}>
            <CardContent>
              <Typography gutterBottom>Total Recoveries:</Typography>
              <Typography color="textSecondary">
                <CountUp
                  separator=","
                  duration={3}
                  end={this.props.globalData.recovered.value}
                />
              </Typography>
              <Typography gutterBottom>Last Updated On:</Typography>
              <Typography color="textSecondary">
                {new Date(this.props.globalData.lastUpdate).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
          <Card className={cx(styles.deaths)}>
            <CardContent>
              <Typography gutterBottom>Total Deaths:</Typography>
              <Typography color="textSecondary">
                <CountUp
                  separator=","
                  duration={3}
                  end={this.props.globalData.deaths.value}
                />
              </Typography>
              <Typography gutterBottom>Last Updated On:</Typography>
              <Typography color="textSecondary">
                {new Date(this.props.globalData.lastUpdate).toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    );
  }
}

export default Cards;
