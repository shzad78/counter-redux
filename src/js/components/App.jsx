import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addOneToCounter, subtractOneToCounter } from '../actions'

 class App extends Component {
  constructor() {
    super();
    
  }

  
  render() {
    console.log('state is ' ,this.props.store.getState())
    return (
      <div className="app container">
        <h2>Counter Example</h2>
        <button
          className="btn btn-primary"
          style={{marginRight:'20px'}}
          onClick={()=>this.props.subtractOneToCounter()}
        >
          Increment
        </button>
        <button
          className="btn btn-danger"
          onClick={()=>this.props.addOneToCounter()}
        >
          Decrement
        </button>

        <h2>Value: { this.props.counter}</h2>

      </div>
    );
  }
};




function mapStateToProps({counter}) {
  return {
    counter
  };
}

export default connect(mapStateToProps,{addOneToCounter,subtractOneToCounter})(App);