import React from 'react';
import { Tab, Menu, Table, Header, List, Divider, Form, Button, Label, Card, Rating, Checkbox } from "semantic-ui-react";

export const tabPanes = [
  {
    menuItem: (
      <Menu.Item key='description'>
        Details
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna dui, bibendum in magna ac, lobortis venenatis dui. Proin porttitor dolor turpis, eget porttitor arcu semper non. Vestibulum tellus elit, pulvinar non porttitor quis, venenatis non purus. Suspendisse vulputate erat tortor, venenatis porttitor turpis sodales nec. Vestibulum aliquet elit placerat, condimentum dui tincidunt, elementum velit. Proin finibus pellentesque sem ut dapibus. Mauris eget porta nulla, vehicula sodales elit. Aenean imperdiet, neque sit amet vestibulum dapibus, ex tortor malesuada lectus, non dignissim orci lectus eget sem. In hac habitasse platea dictumst. Phasellus volutpat elit sed sapien blandit, non imperdiet purus ultricies. Cras congue odio nunc, ac interdum nisl vehicula et. Praesent placerat enim nec vehicula scelerisque. 
          </p>
          <p>
          Phasellus malesuada diam vel turpis placerat, quis faucibus libero pretium. Curabitur cursus euismod eleifend. Nunc egestas diam libero, sed semper eros ultrices ut. Cras porttitor auctor dapibus. Sed in nunc dignissim, tincidunt sapien non, posuere risus. Cras bibendum dictum eros quis luctus. Proin lobortis risus vitae diam tempus dignissim. 
          </p>
        </Tab.Pane>
      )
    },
  },
  {
    menuItem: (
      <Menu.Item key='additional'>
        Additional Information
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          <Header as='h3'>Sizing Information</Header>
          <Table basic='very' celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell>S</Table.HeaderCell>
                <Table.HeaderCell>M</Table.HeaderCell>
                <Table.HeaderCell>L</Table.HeaderCell>
                <Table.HeaderCell>XL</Table.HeaderCell>
                <Table.HeaderCell>XXL</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>ACROSS SHOULDER</Table.Cell>
                <Table.Cell>14</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>16</Table.Cell>
                <Table.Cell>17</Table.Cell>
                <Table.Cell>18</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>WAIST</Table.Cell>
                <Table.Cell>31-33</Table.Cell>
                <Table.Cell>33-35</Table.Cell>
                <Table.Cell>35-38</Table.Cell>
                <Table.Cell>38-41</Table.Cell>
                <Table.Cell>41-44</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>SLEEVE LENGTH</Table.Cell>
                <Table.Cell>23</Table.Cell>
                <Table.Cell>24</Table.Cell>
                <Table.Cell>25</Table.Cell>
                <Table.Cell>26</Table.Cell>
                <Table.Cell>27</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tab.Pane>
      )
    },
  },
  {
    menuItem: (
      <Menu.Item key='rating'>
        Rating<Label>2</Label>
      </Menu.Item>
    ),
    render: () => {
      return(
        <Tab.Pane attached={false}>
          <List>
            <List.Item>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Farrizal</Card.Header>
                  <Card.Meta>Software Engineer</Card.Meta>
                  <Rating icon='star' defaultRating={5} maxRating={5}/>
                  <Card.Description>The quality is good and the shipping is really fast.</Card.Description>
                </Card.Content>
              </Card>
            </List.Item>
            <List.Item>
              <Card fluid>
                <Card.Content>
                  <Card.Header>Alchudry</Card.Header>
                  <Card.Meta>System Analyst</Card.Meta>
                  <Rating icon='star' defaultRating={4} maxRating={5}/>
                  <Card.Description>The quality is good and the shipping is really fast.</Card.Description>
                </Card.Content>
              </Card>
            </List.Item>
          </List>
          
          <Divider />
          <Header as='h3'>Write Your Own Review</Header>
          <p>How do you rate this product?</p>
          <Table celled compact definition>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell/>
                <Table.HeaderCell>1 STAR</Table.HeaderCell>
                <Table.HeaderCell>2 STAR</Table.HeaderCell>
                <Table.HeaderCell>3 STAR</Table.HeaderCell>
                <Table.HeaderCell>4 STAR</Table.HeaderCell>
                <Table.HeaderCell>5 STAR</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {/* Quality Rating */}
              <Table.Row>
                <Table.Cell collapsing>
                  Quality
                </Table.Cell>
                <Table.Cell >
                  <Checkbox slider/>
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
              </Table.Row>
              {/* Price Rating */}
              <Table.Row>
                <Table.Cell>
                  Price
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
                <Table.Cell>
                  <Checkbox slider />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form>
            <Form.Field>
              <label>Name</label>
              <input placeholder=' Fill Your Full Name' />
            </Form.Field>
            <Form.Field>
              <label>Summary of Review</label>
              <input placeholder=' Fill Summary of Your Review ' />
            </Form.Field>
            <Form.TextArea label='Review' placeholder='Tell us more about your experience...' />
            <Button secondary type='submit'>Submit Review</Button>
          </Form>
        </Tab.Pane>
      )
    },
  },
];