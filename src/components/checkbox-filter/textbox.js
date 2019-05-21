import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  labelContainer:{
    display: 'block',
    float: 'left',
    margin: '0.3rem',
    position: 'relative',
    border: '0.2rem solid rgb(214, 214, 214)',
    fontWeight: 'normal'
  },
  spanContainer: {
    display: 'block',
    minWidth: '3.2rem',
    minHeight: '3.2rem',
    maxWidth: '100%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    textAlign: 'center',
    lineHeight: '2.8rem',
    fontSize: '1.2rem',
    fontWeight: 'normal',
    padding: '0.2rem 0.4rem',
    userSelect: 'none'
  }
}

class TextBoxFilter extends React.Component{
  render(){
    const { content } = this.props;
    return(
      <label style={styles.labelContainer}>
        <span style={{...styles.spanContainer}}>
          { content }
        </span>
      </label>
    )
  }
}

TextBoxFilter.propTypes = {
  content: PropTypes.string,
  onClick: PropTypes.func
}

export default TextBoxFilter;