import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './styles.scss';
import Avatar from 'material-ui/Avatar';

const initialState = {
  brand: "MI.CAPITAL",
  side: "left",
  avatarInitials: "MC"
};

class BrandUsage extends Component {

  state = initialState
  render() {
    return( 
      <div>
         <Avatar>{this.state.avatarInitials}</Avatar>
         <h3>{this.state.brand}</h3>
        
      </div> );
  };
};

export default CSSModules(BrandUsage, styles);