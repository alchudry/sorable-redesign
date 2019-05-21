import React from 'react';
import PropTypes from 'prop-types';
import DesktopHeader from './desktop';
import MobileHeader from './mobile';

class CustomHeader extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const { type, children } = this.props;
    if(type == 'mobile'){
      return(
        <MobileHeader>{children}</MobileHeader>
      )
    }
    if(type == 'desktop'){
      return(
        <DesktopHeader>{children}</DesktopHeader>
      )
    }
  }
}

CustomHeader.propTypes = {
  children: PropTypes.node
}

export default CustomHeader;