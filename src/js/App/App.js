import React, { Component } from 'react';
import { connect } from 'react-redux';

import { func } from 'prop-types';
import getInfo from '../api/getInfo';

import PatientsTable from '../PatientsTable';

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
        <PatientsTable />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userLists: state.userLists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onGetInfo: info => dispatch({ type: 'GET_INFO', payload: info }),
  };
}

App.propTypes = {
  onGetInfo: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
