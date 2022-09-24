import React, { useState } from "react";

import "./ExpenseItem.css";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("New Title");
    alert("clicked");
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
      <input type="text" />

      {/* button tag can be used */}
      <button onClick={clickHandler}>change Title</button>
    </div>
  );
}

export default ExpenseItem;
