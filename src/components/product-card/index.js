import React from 'react';
import { Icon, Image, Card, Button } from 'semantic-ui-react';

const styles = {
  productContainer:{
    border: 'none',
    boxShadow: 'none'
  },
  productImage:{
    borderRadius: 'unset !important'
  },
  addToCartContainer:{
    borderTop: 'none !important'
  },
  btnColor: {
    background: 'rgb(172, 20, 90)',
    color: 'rgb(255,255,255)'
  }
}

class ProductCard extends React.Component{ 
  render(){
    const { productImage, productName, productPrice } = this.props;
    return(
      <Card 
        fluid
        link
        style={styles.productContainer}
      >
        <Image
          wrapped
          ui={false}
          src={productImage}
          style={styles.productImage}
        />
        <Card.Content>
          <Card.Header>
            {productName}
          </Card.Header>
        </Card.Content>
        <Card.Content
          extra
          style={styles.addToCartContainer}
        >
          <Button
            fluid
            animated='fade'
            style={styles.btnColor}
          >
            <Button.Content hidden>
              <Icon name='shop'/>
              Add to Cart
            </Button.Content>
            <Button.Content visible>
              $ {productPrice}
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    )
  }
}

export default ProductCard;