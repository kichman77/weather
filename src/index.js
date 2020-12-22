import css from "./css/styles.css";
// import "./js/getFetch.js";
import fetchObject from "./js/fetchObject.js";
import refs from "./js/refs.js";
const { weatherWrapper, input } = refs;

input.addEventListener("change", (e) => {
  fetchObject.query = e.target.value;
  fetchObject.getFetch(weatherWrapper, input);
});
