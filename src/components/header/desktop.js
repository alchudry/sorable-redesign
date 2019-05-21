import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, Menu, Grid, Visibility, Container, Search, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

import { getWidth } from '../../app/helper';
import { styles } from './styles';


class DesktopHeader extends React.Component{
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false})
  showFixedMenu = () => this.setState({ fixed: true})

  handleSearch = () => {}

  render(){
    const { fixed } = this.state;
    const { children } = this.props;
    return(
      <Responsive
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}
      >
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          >
          {/* <Segment> */}
          {/* Logo Menu */}
            <Menu
              borderless
              style={styles.topMenuContainer}
              fixed={fixed ? 'top' : null}
              >
              <Container >
                <Menu.Item as='a' header>
                  <Image size='tiny' src='assets/images/logo-sorabel.png'/>
                </Menu.Item>
                <Menu.Item
                  style={styles.searchItemContainer}>
                  <Search
                    fluid
                    value={this.state.searchKeyword}
                    onSearchChange={_.debounce(this.handleSearch, 500,{
                      leading: true,
                    })}
                    placeholder={'Search Product'}
                    style={styles.searchItem}
                  />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Icon
                    circular
                    size='large'
                    name='shopping cart'
                  />
                  <Grid.Row>
                    <div>
                      1 Product
                    </div>
                    <div>
                      Checkout NOW!
                    </div>
                  </Grid.Row>
                </Menu.Item>
              </Container>
            </Menu>
            {/* Category Menu */}
            <Menu
              inverted
              style={styles.categoryMenuContainer}>
              <Container>
                <Menu.Item name='home' as={NavLink} exact to='/'>
                  Home
                </Menu.Item>
                <Menu.Item name='dress' as={NavLink} exact to='/product-category/dress'>
                  Dress
                </Menu.Item>
                <Menu.Item name='moeslim-wear' as={NavLink} exact to='/product-category/moeslim-wear'>
                  Moeslim Wear
                </Menu.Item>
                <Menu.Item position='right'>
                  Sign In
                </Menu.Item>
              </Container>
            </Menu>
          {/* </Segment> */}
        </Visibility>
        {children}
      </Responsive>
    )
  }
}

DesktopHeader.propTypes = {
  children: PropTypes.node
}

export default DesktopHeader;