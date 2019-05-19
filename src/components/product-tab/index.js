import React from 'react';

import { tabPanes } from './config';
import { Tab } from 'semantic-ui-react';

class ProductTab extends React.Component{
  render(){ return <Tab menu={{ secondary: true, pointing: true }} panes={tabPanes}/> }
}

export default ProductTab;