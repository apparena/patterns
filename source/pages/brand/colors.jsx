import React from 'react';
import { Card, Col, Row, ReactComponent, Input } from 'apparena-patterns-react';
import { SwatchesPicker, BlockPicker } from 'react-color';

const title = 'Colors';

class render extends ReactComponent {
  getInitState() {
    return {
      color: ''
    };
  }

  handleSwatchChange(color, event) {
    this.setState({
      color: color.hex
    });
  }

  render() {
    return (
      <Card>
        <div type="card-header">
          Colors
        </div>
        <div type="card-body">
          <p>
            Our primary palette uses bright colors to bring a boldness to our brand, and is used in
            logical
            ways
            throughout product and marketing to guide the eye and highlight the important bits. We
            pepper
            warmer, secondary palette colors throughout to soften the experience and to impart
            confidence
            and
            optimism.
          </p>
          <Row>
            <Col autoWidth>

              <h4>Primary</h4>
              <BlockPicker color={'#0e85f4'}
                           width={'100%'}
                           colors={[]}
                           triangle={'hide'}
              />
              <h6>Used for</h6>
              <ul>
                <li>Highlight</li>
                <li>CTA</li>
                <li>Header background</li>
                <li>Text links</li>
              </ul>

            </Col>
            <Col autoWidth>

              <h4>Secondary</h4>
              <BlockPicker color={'#f8f9fa'}
                           width={'100%'}
                           colors={[]}
                           triangle={'hide'}
              />

              <ul>
                <li>Contrast</li>
                <li>Component background</li>
              </ul>

            </Col>
            <Col autoWidth>

              <h4>Background</h4>
              <BlockPicker color={'#ffffff'}
                           width={'100%'}
                           colors={[]}
                           triangle={'hide'}
              />

              <ul>
                <li>Background</li>
              </ul>

            </Col>

          </Row>

          <hr/>

          <h1>Secondary palette</h1>

          <p>
            Our secondary palette contains a variety of colors to keep things fresh and interesting.
            We lean
            on
            these colors more frequently when brand awareness is high, or on our own properties
            where we
            control
            the surrounding environment. When used in conjunction with our primary palette, these
            colors
            makes
            every moment feel on-brand.
          </p>

          <Row>
            <Col xs="4">
              <SwatchesPicker color={this.state.color}
                              height={'300px'}
                              width={'100%'}
                              colors={[
                                ['#000033', '#33335C', '#666685', '#9999AD', '#CCCCD6'],
                                ['#FF2731', '#FF525A', '#FF7D83', '#FFA9AD', '#FFD4D6'],
                                ['#FFDB16', '#FFE245', '#FFE973', '#FFF1A2', '#FFF8D0'],
                                ['#00DEFF', '#33E5FF', '#66EBFF', '#99F2FF', '#CCF8FF'],
                                ['#40F99B', '#66FAAF', '#8CFBC3', '#B3FDD7', '#D9FEEB']
                              ]}
                              triangle={'hide'}
                              onChange={::this.handleSwatchChange}
              />
            </Col>
            <Col xs="4">
              <Input defaultValue={this.state.color} onChange={() => {}}/>
            </Col>
          </Row>
        </div>
      </Card>
    );
  }
}

export default {
  title,
  render
};
