import React, { Component } from 'react';
import { connect } from 'react-redux';

import { array, func } from 'prop-types';
import getInfo from '../api/getInfo';

const URLS = {
  presentList: '/assets/data/presentList.json',
  quittingList: '/assets/data/quittingList.json',
};

class App extends Component {
  componentDidMount = async () => {
    this.props.onGetInfo(await getInfo(URLS));
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <button></button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    presentList: state.presentList,
    quittingList: state.quittingList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInfo: info => dispatch({ type: 'GET_INFO', payload: info }),
  };
}

App.propTypes = {
  presentList: array,
  quittingList: array,
  onGetInfo: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
