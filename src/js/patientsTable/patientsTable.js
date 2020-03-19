import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object, string, func } from 'prop-types';

import './PatientsTable.scss';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import ListSwitch from '../ListSwitch';

import headersMapping from '../api/ tableHeadersMapping';

class PatientsTable extends Component {
  render() {
    const { selectedList, userLists, onSelectPatient } = this.props;
    return (
      <div className="main-wrapper">
        <ListSwitch />
        <TableContainer component={Paper} className="table-container">
          <Table stickyHeader aria-label="Table of patients" className="main-table">
            <TableHead>
              <TableRow hover>
                {Object.keys(headersMapping[selectedList]).map(head => (
                  <TableCell key={head} align="center">
                    {head}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.keys(userLists).length !== 0 &&
                userLists[selectedList].map((patient, i) => (
                  <TableRow hover key={i} onClick={() => onSelectPatient(patient)}>
                    {Object.values(headersMapping[selectedList]).map((parameter, num) => (
                      <TableCell key={num} align="center">
                        {patient[parameter]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
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
    onSelectPatient: patient => dispatch({ type: 'CHANGE_PATIENT', payload: patient }),
  };
}

PatientsTable.propTypes = {
  selectedList: string,
  userLists: object,
  onSelectPatient: func,
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsTable);
