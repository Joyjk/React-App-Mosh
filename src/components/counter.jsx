import React, { Component } from "react";

class Counter extends React.Component {
  // state = {
  //     value: this.props.counter.value,
  //     tags: []

  // };

  // handleIncrement = () =>{

  //     this.setState({value: this.state.value + 1})
  // }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      /// Ajax call get new data from the server
    }
  }

  componentWillUnmount() {
    console.log("counter - unmount");
  }

  render() {
    //console.log("Props: ",this.props)
    console.log("Counter - Rendered");
    return (
      <div>
        <span className={this.getBadgeChanges()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  // renderTags(){
  //     if(this.state.tags.length===0) return <p>There are no Tags</p>;

  //     return  <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;
  // }

  // render() {

  //     return <div>

  //                 <span  className={this.getBadgeChanges()}>{this.formatCount()}</span>
  //                 <button className='btn btn-secondary btn-sm'>Increment</button>
  //                 <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>
  //          </div>;
  // }
  getBadgeChanges() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? <span>Zero</span> : count;
  }
}

export default Counter;
