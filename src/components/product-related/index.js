import React from 'react';
import Swiper from 'react-id-swiper';


import { relatedParams, relatedProductData } from './config';
import { Header, Card } from 'semantic-ui-react';

class ProductRelated extends React.Component{
  render(){
    return(
      <div>
        <Header as='h2'>Customer Also Bought</Header>
          {/* Related Product Swiper */}
          <Swiper {...relatedParams}>
            {relatedProductData.map((product, index)=>{
              return(
                <div key={index}>
                  <Card raised image={product.featuredImage} />
                </div>
              )
            })}
          </Swiper>
      </div>
    )
  }
}

export default ProductRelated;