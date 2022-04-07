import { useSelector, useDispatch, connect } from "react-redux";
import classes from "./Counter.module.css";
import React, { Component } from "react";
import { counterActions } from "../store/redux-index";

const Counter = () => {
  const dispatch = useDispatch(); //returns a function
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    // dispatch({ type: "TOGGLE" });

    //toolkit method
    dispatch(counterActions.toggleCounter()); //{type: UNIQUE_INDENTIFIER}
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const incrementHandlerByFive = () => {
    // dispatch({ type: "INCREMENT-5", amount: 5 });

    //toolkit method
    dispatch(counterActions.increaseByFive(5)); //{type: UNIQUE_INDENTIFIER, payload: 5}
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={incrementHandlerByFive}>INCREMENT BY 5</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class CounterClass extends Component {
//   toggleCounterHandler = () => {};

//   incrementHandler = () => {
//     this.props.increment();
//   };

//   decrementHandler = () => {
//     this.props.decrement();
//   };

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>INCREMENT</button>
//           <button onClick={this.decrementHandler.bind(this)}>DECREMENT</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "INCREMENT" }),
//     decrement: () => dispatch({ type: "DECREMENT" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
