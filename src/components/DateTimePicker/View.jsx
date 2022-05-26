import { DatePicker } from "antd";
import { useState } from "react";
import Timeslot from "./components/Timeslot/View";
import styles from "./dateTimePicker.module.css";
import moment from "moment";

function DateTimePicker(props) {
  const { options } = props;
  const [selected, setSelected] = useState(null);
  const disabledDate = (current) => {
    const dayOfWeek = current.day();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const isPassed = current && current < moment().endOf("day");
    return isWeekend || isPassed;
  };
  console.log(selected);
  return (
    <div className={styles.container}>
      <DatePicker
        className={styles.picker}
        disabledDate={disabledDate}
        defaultValue={moment().add({ day: 1 })}
      />
      <div className={styles.timeslots}>
        {options.map((option) => (
          <Timeslot
            key={option.value}
            text={option.text}
            selected={selected === option.value}
            onClick={() =>
              setSelected(selected === option.value ? null : option.value)
            }
          />
        ))}
      </div>
      <p style={{ padding: 20 }}>{selected}</p>
      <input hidden value={selected || ""} name="date" onChange={() => {}} />
    </div>
  );
}

export default DateTimePicker;
