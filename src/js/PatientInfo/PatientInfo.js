import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PatientInfo.scss';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';
import PersonIcon from '@material-ui/icons/Person';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { object } from 'prop-types';

class PatientInfo extends Component {
  render() {
    const { selectedPatient } = this.props;
    return (
      <Card className="info-wrapper">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Информация о пациенте</Typography>
          </Toolbar>
        </AppBar>
        <CardContent>
          <List>
            <ListItem>
              <ListItemAvatar>
                <PersonIcon />
              </ListItemAvatar>
              <ListItemText primary={selectedPatient.initials} secondary="ФИО" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <DateRangeIcon />
              </ListItemAvatar>
              <ListItemText primary={selectedPatient.age} secondary="Возраст" />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem>
              <ListItemAvatar>
                <LocalHospitalIcon />
              </ListItemAvatar>
              <ListItemText primary={selectedPatient.diagnosis} secondary="Диагноз" />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </CardContent>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedPatient: state.selectedPatient,
  };
}

PatientInfo.propTypes = {
  selectedPatient: object,
};

export default connect(mapStateToProps)(PatientInfo);
