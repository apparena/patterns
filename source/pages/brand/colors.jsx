import React from 'react';
import { Card, Col, Row, ReactComponent } from 'apparena-patterns-react';
import { SwatchesPicker, BlockPicker } from 'react-color';
import styles from './brand.scss';

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
      <div>
        <Card>
          <div type="card-header">
            Primary pallette
          </div>
          <div type="card-body">
            <p>
              Our primary palette uses bright colors to bring a boldness to our brand, and is used
              in
              logical ways throughout product and marketing to guide the eye and highlight the
              important bits. We
              pepper warmer, secondary palette colors throughout to soften the experience and to
              impart
              confidence and optimism.
            </p>
            <div>
              <Row className={styles['mb-3']}>
                <Col xs="3">
                  <h4>Primary</h4>

                  <BlockPicker color={'#0e85f4'}
                               width={'100%'}
                               colors={[]}
                               triangle={'hide'}
                  />
                </Col>
                <Col xs="9">
                  <h5>Used it for</h5>
                  <ul>
                    <li>Highlight</li>
                    <li>CTA</li>
                    <li>Header background</li>
                    <li>Text links</li>
                  </ul>
                </Col>
              </Row>
              <Row className={styles['mb-3']}>
                <Col xs="3">
                  <h4>Secondary</h4>
                  <BlockPicker color={'#f8f9fa'}
                               width={'100%'}
                               colors={[]}
                               triangle={'hide'}
                  />
                </Col>
                <Col xs="9">
                  <h5>Used it for</h5>
                  <ul>
                    <li>Contrast</li>
                    <li>Component background</li>
                  </ul>

                </Col>
              </Row>
              <Row className={styles['mb-3']}>
                <Col xs="3">
                  <h4>Background</h4>
                  <BlockPicker color={'#ffffff'}
                               width={'100%'}
                               colors={[]}
                               triangle={'hide'}
                  />
                </Col>
                <Col xs="9">
                  <h5>Used it for</h5>
                  <ul>
                    <li>Background</li>
                  </ul>
                </Col>
              </Row>
            </div>
          </div>
        </Card>
        <Card>
          <div type="card-header">
            Secondary pallette
          </div>
          <div type="card-body">
            <p>
              Our secondary palette contains a variety of colors to keep things fresh and
              interesting.
              We lean on these colors more frequently when brand awareness is high, or on our own
              properties
              where we control the surrounding environment. When used in conjunction with our
              primary palette, these
              colors makes every moment feel on-brand.
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
                                  ['#10e28b', '#40E8A2', '#70EEB9', '#9FF3D1', '#CFF9E8']
                                ]}
                                triangle={'hide'}
                                onChange={::this.handleSwatchChange}
                />
              </Col>
              <Col xs="4">
                <h4>Selected color HEX code is: {this.state.color}</h4>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default {
  title,
  render
};
