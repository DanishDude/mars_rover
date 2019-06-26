import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { left, right, move } from './actions';

function App({ x, y, position, left, right, move }) {
  return (
    <div className="App">
      <h5> Position: { x } { y } { position } </h5>
      <button type="button" onClick={() => left()}>L</button>
      <button type="button" onClick={() => right()}>R</button>
      <button type="button" onClick={() => move()}>M</button>
    </div>
  );
}

const mstp = state => ({
  x: state.x,
  y: state.y,
  position: state.position,
});

const mdtp = dispatch => bindActionCreators({
  left, right, move,
}, dispatch);

export default connect(mstp, mdtp)(App);
