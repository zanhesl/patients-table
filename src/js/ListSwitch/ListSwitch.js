import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, object } from 'prop-types';

import './ListSwitch.scss';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class ListSwitch extends Component {
  state = {
    value: 0,
  };

  onItemClicked = selectedOption => {
    this.props.onChangeList(selectedOption);
  };

  a11yProps(index) {
    return {
      id: `action-tab-${index}`,
      'aria-controls': `action-tabpanel-${index}`,
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
    const newSelectedType = newValue ? 'quittingList' : 'presentList';
    this.props.onChangeList(newSelectedType);
  };

  render() {
    const { userLists } = this.props;
    return (
      <>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label={`Присутствуют(${userLists.presentList.length})`} {...this.a11yProps(0)} />
            <Tab label={`Выбывшие(${userLists.quittingList.length})`} {...this.a11yProps(1)} />
          </Tabs>
        </AppBar>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedList: state.selectedList,
    userLists: state.userLists,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeList: info => dispatch({ type: 'CHANGE_LIST', payload: info }),
  };
}

ListSwitch.propTypes = {
  selectedList: string,
  onChangeList: func,
  userLists: object,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListSwitch);
