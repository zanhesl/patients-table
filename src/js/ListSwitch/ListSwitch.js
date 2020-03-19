import React, { Component } from 'react';
import { connect } from 'react-redux';
import { string, func, object } from 'prop-types';

import './ListSwitch.scss';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ListSwitch extends Component {
  onItemClicked = selectedOption => {
    this.props.onChangeList(selectedOption);
    console.log(1);
  };

  render() {
    const { userLists } = this.props;
    return (
      <List className="main-table__navbar">
        <ListItem button onClick={() => this.onItemClicked('presentList')}>
          <ListItemText primary={`Присутствуют(${userLists.presentList.length})`} />
        </ListItem>
        <ListItem button onClick={() => this.onItemClicked('quittingList')}>
          <ListItemText primary={`Выбывшие(${userLists.quittingList.length})`} />
        </ListItem>
      </List>
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
