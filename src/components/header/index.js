import React from 'react';
import { Responsive, Visibility, Icon, Menu, Container, Image, Search, Grid } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as productActions } from '../../reducers/productReducers';

const styles = {
  topMenuContainer: {
    border: 'none',
    boxShadow: 'none',
  },
  categoryMenuContainer: {
    border: 'none',
    borderRadius: 'unset',
    padding: 10,
  },
  searchItemContainer: {
    flexGrow: 1
  },
  searchItem: {
    margin: '0 auto'
  }
}

class CustomHeader extends React.Component{
  handleSearch = () => {
    this.props.search_product();
  }
  render(){
    console.log("props", this.props);
    const {
      // State
      searchKeyword,
      // Action
      search_product
    } = this.props;
    return(
      <Responsive>
        <Visibility>
          {/* <Segment> */}
          {/* Logo Menu */}
            <Menu
              borderless
              style={styles.topMenuContainer}>
              <Container >
                <Menu.Item as='a' header>
                  <Image size='tiny' src='assets/images/logo-sorabel.png'></Image>
                </Menu.Item>
                <Menu.Item
                  style={styles.searchItemContainer}>
                  <Search
                    fluid
                    value={searchKeyword}
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
                <Menu.Item>
                  Home
                </Menu.Item>
                <Menu.Item>
                  Blouse
                </Menu.Item>
                <Menu.Item>
                  Dress
                </Menu.Item>
                <Menu.Item position='right'>
                  Promotion!
                </Menu.Item>
              </Container>
            </Menu>
          {/* </Segment> */}
        </Visibility>
      </Responsive>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({
    ...productActions
  }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CustomHeader);