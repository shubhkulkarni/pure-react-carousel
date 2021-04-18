import React from "react";
import styles from "./Filter.module.css";
function Filter({ list, value, onChange }) {
  return (
    
      <select value={value} onChange={onChange} className={styles.select}>
        {list.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    
  );
}

export default Filter;
