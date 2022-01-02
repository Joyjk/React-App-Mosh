import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  render() {
    const { onReset, onDelete, onIncrement, counters } = this.props;

    console.log("Counters - Rendered");

    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
