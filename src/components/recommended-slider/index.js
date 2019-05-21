import React from 'react';
import { Card, List, Container, Image } from 'semantic-ui-react';
import Swiper from 'react-id-swiper';


class RecommendedSlider extends React.Component{
  render(){
    const { data } = this.props;
    const rows = [...Array( Math.ceil(data.length / 2) )];
    const productRows = rows.map( ( _, idx) => data.slice(idx * 2, idx * 2 + 2) );
    return(
      <Card fluid>
        <Card.Content>
          <Card.Header>Recomended Product</Card.Header>
        </Card.Content>
        <Card.Content>
          <Container>
            <Swiper>
              {productRows.map((data, index)=>{
                  return(
                    <List
                      selection
                      key={index}
                    >
                      {data.map((product,index)=>{
                        return(
                          <List.Item key={index}>   
                            <Image
                              size="small"
                              src={product.featuredImage}
                            />
                            <List.Content>
                              <List.Header>{product.name}</List.Header>
                            </List.Content>
                          </List.Item>
                        )
                      })}
                    </List>
                  )
                }
              )} 
            </Swiper>
          </Container>
        </Card.Content>
      </Card>
    )
  }
}

export default RecommendedSlider;