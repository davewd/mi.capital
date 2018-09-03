import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import styles from './styles.scss';

import 'typeface-roboto';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BrandOwner from './components/items/BrandOwner';
import BrandUsage from './components/items/BrandUsage';

import NavigationBar from './components/navigation'


class App extends Component {
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
        <MuiThemeProvider>
          <div>
            <center><FloatingActionButton iconClassName="muidocs-icon-action-grade" /></center>
            <h1>{this.state.navSelectedIndex}</h1>
                    
            <NavigationBar handler={this.handler}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;