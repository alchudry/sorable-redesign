import React from 'react';
import PropTypes from 'prop-types';

import CustomHeader from '../header';

export const ResponsiveContainer = ({ children }) => (
  <div>
    <CustomHeader type='desktop'>{children}</CustomHeader>
    <CustomHeader type='mobile'>{children}</CustomHeader>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node
}