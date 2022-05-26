import { Button } from "antd";
import classNames from "classnames";
import React from "react";
import styles from "./timeslot.module.css";

const Timeslot = (props) => {
  const { text, onClick, selected } = props;
  return (
    <Button
      type={selected ? "ghost" : "primary"}
      className={classNames(styles.timeslot, selected && styles.selected)}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default Timeslot;
