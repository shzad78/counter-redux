import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addOneToCounter, subtractOneToCounter } from '../actions'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      x: 0
    }
  }

  incHandler(e){
    this.setState({x:1})
    this.props.store.dispatch(addOneToCounter())
  }

  decHandler(e){
    this.setState({x:1})
    this.props.store.dispatch(subtractOneToCounter())

  }

  render() {
    console.log('state is ' , this.props.store && this.props.store.getState())
    return (
      <div className="app container">
        <h2>Counter Example</h2>
        <button
          className="btn btn-primary"
          style={{marginRight:'20px'}}
          onClick={this.incHandler.bind(this)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={this.decHandler.bind(this)}
        >
          Decrement
        </button>

        <h2>Value: {this.props.store && this.props.store.getState().counter}</h2>

      </div>
    );
  }
};



App.propTypes = {
  //getVideos: PropTypes.func.isRequired,
}