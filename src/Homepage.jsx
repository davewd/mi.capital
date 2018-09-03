import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import styles from './styles.scss';

import 'typeface-roboto';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BrandOwner from './components/items/BrandOwner';
import BrandUsage from './components/items/BrandUsage';

import NavigationBar from './components/navigation'


class Homepage extends Component {
  state = {
    navSelectedIndex: 0,
  };

handler(e) {
    e.preventDefault()
    this.setState({
      navSelectedIndex: 1
    });
  };

  render() {
    return (
      <div>
        <p align="center" valign="center" ><font size="64" color="black" fontWeight='bold' fontFamily = 'sans-serif'>M i . C a p i t a l</font></p>
      </div>
    );
  }
}

export default Homepage;