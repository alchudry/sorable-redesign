import React from 'react';
import PropTypes from 'prop-types';

import TextBoxFilter from './textbox';
import CheckFilter from './check';

class CheckBoxFilter extends React.Component{
  state = {}

  render(){
    const { color, type, content,onClick } = this.props;
    if(type == 'check'){
      return(
        <CheckFilter color={color} onClick={onClick}/>
      )
    }
    if(type == 'text'){
      return(
        <TextBoxFilter content={content} onClick={onClick}/>
      )
    }
  }
}

CheckBoxFilter.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func
}

export default CheckBoxFilter;