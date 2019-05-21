import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  labelContainer: {
    display: 'block',
    float: 'left',
    margin: '0.3rem',
    position: 'relative',
    fontWeight: 'normal'
  },
  checkContainer: {
    display: 'block',
    borderRadius: '50%',
    lineHeight: '3rem',
    width: '3.2rem',
    height: '3.2rem',
    overflow: 'hidden',
    textAlign: 'center',
    fontWeight: 'normal',
    color: 'rgb(128, 128, 128)',
    border: '0.2rem solid rgb(255, 255, 255)',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 0px 0.1rem, rgba(0, 0, 0, 0.12) 0px 0.1rem 0.1rem, rgba(0, 0, 0, 0.12) 0px 0.1rem 0.2rem',
    userSelect: 'none'
  },
  checkedContainer: {
    width: '3.2rem',
    height: '3.2rem',
    backgroundSize: '90%',
    backgroundPosition: 'center center',
    backgroundImage: 'url("https://salestock-public-prod.freetls.fastly.net/assets/images/icons/icon-check-mark-white-6e6e14a4.png")',
    position: 'absolute',
    top: '0px',
    left: '0px',
    display: 'block'
  }
}

class CheckFilter extends React.Component{
  state = {}

  _handleOnClick = () => {
    this.props.onClick;
    this.setState({checked: !this.state.checked})
  }

  render(){
    const { color } = this.props;
    const { checked } = this.state;
    return(
      <label style={styles.labelContainer} onClick={()=> { this._handleOnClick()}}>
        <span style={{ ...styles.checkContainer, background: color}}>
          { checked && <div style={styles.checkedContainer}/> }
        </span>
      </label>
    )
  }
}

CheckFilter.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default CheckFilter;