import React from 'react';
import PropTypes from 'prop-types';
import { getWidth } from '../../app/helper';
import { Responsive, Visibility, Sidebar, Menu, Segment, Container, Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class MobileHeader extends React.Component{
  state = {}

  handleSideBarHide = () => this.setState({ sidebarOpened: false })
  handleSideBarShow = () => this.setState({ sidebarOpened: true })

  render(){
    const { sidebarOpened } = this.state;
    const { children } = this.props;
    return(
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Visibility once={false}>
          <Sidebar
            as={Menu}
            animation='push'
            vertical
            onHide={this.handleSideBarHide}
            visible={sidebarOpened}
          >
            <Menu.Item>
              <Image size='medium' src='assets/images/logo-sorabel.png'/>
            </Menu.Item>
            <Menu.Item name='home' as={NavLink} exact to='/'>
              Home
            </Menu.Item>
            <Menu.Item name='dress' as={NavLink} exact to='/product-category/dress'>
              Dress
            </Menu.Item>
            <Menu.Item name='moeslim-wear' as={NavLink} exact to='/product-category/moeslim-wear'>
              Moeslim Wear
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              vertical
              textAlign='center'
              style={{
                padding: '1em 0em',
                border: 'none',
                boxShadow: 'none'
              }}
            >
              <Container>
                <Menu
                  borderless
                >
                  <Menu.Item onClick={this.handleSideBarShow}>
                    <Icon name='sidebar'/>
                  </Menu.Item>
                  <Menu.Item>
                    <Image size='tiny' src='assets/images/logo-sorabel.png'/>
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Icon
                      circular
                      size='large'
                      name='shopping cart'
                    />
                  </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
          </Sidebar.Pusher>
        </Visibility>
      </Responsive>
    )
  }
}

MobileHeader.propTypes = {
  children: PropTypes.node
}

export default MobileHeader;