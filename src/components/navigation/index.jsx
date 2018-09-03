import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import BottomNavigation, { BottomNavigationItem } from 'material-ui/BottomNavigation';

import RestoreIcon from 'material-ui-icons/Restore';
import PaymentIcon from 'material-ui-icons/Payment';
import LocationOnIcon from 'material-ui-icons/LocationOn';
import FolderIcon from 'material-ui-icons/Work';

import FontIcon from 'material-ui/FontIcon';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class NavigationBar extends Component {
  state = {
    selectedIndex: 0,
  };

  select = (index) =>  this.setState({selectedIndex: index});


  render() {
    return (
      <Paper zDepth={1}>
        <BottomNavigation selectedIndex={this.state.selectedIndex}>
          <BottomNavigationItem
            label="Home"
            icon={<RestoreIcon />}
            onClick={() => {this.select(0); this.props.handler}}
          />
          <BottomNavigationItem
            label="Purchase"
            icon={<PaymentIcon />}
            onClick={() => {this.select(1); this.props.handler}}
          />
          <BottomNavigationItem
            label="Feed"
            icon={<LocationOnIcon />}
            onClick={() => {this.select(2); this.props.handler}}
          />
          <BottomNavigationItem
            label="Portfolio"
            icon={<FolderIcon />}
            onClick={() => {this.select(3); this.props.handler}}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}


export default CSSModules(NavigationBar, styles);