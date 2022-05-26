import React from "react";
import DateTimePicker from "./components/DateTimePicker";
import styles from "./app.module.css";

const options = [
  {
    value: "2019-06-11T09:00",
    text: "09:00 AM",
  },
  {
    value: "2019-06-11T11:00",
    text: "11:00 AM",
  },
  {
    value: "2019-06-11T14:00",
    text: "02:00 PM",
  },
  {
    value: "2019-06-11T15:00",
    text: "03:00 PM",
  },
];
const App = () => {
  return (
    <div className={styles.container}>
      <center>
        <DateTimePicker options={options} />
      </center>
    </div>
  );
};

export default App;
