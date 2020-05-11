import * as actionTypes from "./actions";
import axios from "axios";

const BASE_URL = "https://covid19.mathdro.id/api/";

export const gettingData = (country) => (dispatch) => {
  let url;
  if (country) {
    url = `${BASE_URL}countries/${country} `;
  } else {
    url = BASE_URL;
  }

  axios
    .get(url)
    .then((res) => {
      dispatch(getData(res.data));
    })
    .catch((err) => console.log(err));
};

export const getData = (data) => {
  return {
    type: actionTypes.GET_DATA,
    payload: data,
  };
};

export const gettingDailyData = () => (dispatch) => {
  axios
    .get(`${BASE_URL}daily/`)
    .then((res) => {
      dispatch(getDailyData(res.data));
    })
    .catch((err) => console.log(err));
};

export const getDailyData = (data) => {
  return {
    type: actionTypes.GET_DAILY_DATA,
    payload: data,
  };
};

export const gettingCountries = () => (dispatch) => {
  axios
    .get(`${BASE_URL}countries/`)
    .then((res) => {
      dispatch(getCountries(res.data));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCountries = (data) => {
  return {
    type: actionTypes.GET_COUNRTIES,
    payload: data.countries,
  };
};
