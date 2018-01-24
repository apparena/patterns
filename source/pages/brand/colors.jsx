import React from 'react';
import {Card, Col, Row, ReactComponent, Input} from 'apparena-patterns-react';
import {SwatchesPicker, BlockPicker} from 'react-color';

const title = 'Colors';

class render extends ReactComponent {
    getInitState() {
        return {
            color: ''
        }
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
                    <h1>Primary palette</h1>
                    <p>
                        Our primary palette uses bright colors to bring a boldness to our brand, and is used in logical
                        ways
                        throughout product and marketing to guide the eye and highlight the important bits. We pepper
                        warmer, secondary palette colors throughout to soften the experience and to impart confidence
                        and
                        optimism.
                    </p>
                    <Row>
                        <Col autoWidth>

                            <h2>CTA-Buttons</h2>
                            <BlockPicker color={'#0e85f4'}
                                         width={'100%'}
                                         colors={[]}
                                         triangle={'hide'}
                            />
                        </Col>
                        <Col autoWidth>

                            <h2>???</h2>
                            <BlockPicker color={'#f8f9fa'}
                                         width={'100%'}
                                         colors={[]}
                                         triangle={'hide'}
                            />
                        </Col>
                        <Col autoWidth>

                            <h2>???</h2>
                            <BlockPicker color={'#ffffff'}
                                         width={'100%'}
                                         colors={[]}
                                         triangle={'hide'}
                            />
                        </Col>
                    </Row>

                    <hr/>

                    <h1>Secondary palette</h1>

                    <p>
                        Our secondary palette contains a variety of colors to keep things fresh and interesting. We lean
                        on
                        these colors more frequently when brand awareness is high, or on our own properties where we
                        control
                        the surrounding environment. When used in conjunction with our primary palette, these colors
                        makes
                        every moment feel on-brand.
                    </p>

                    <Row>
                        <Col xs="4">
                            <SwatchesPicker color={this.state.color}
                                            height={'300px'}
                                            width={'100%'}
                                            colors={[
                                                ['#2D3D4A', '#4a657a', '#6d8ca6', '#9db2c3', '#ced8e1'],
                                                ['#2DCC56', '#53d976', '#7ee298', '#a9ecba', '#d4f5dc'],
                                                ['#67C6EB', '#85d1ef', '#a3dcf3', '#c2e8f7', '#e0f3fa'],
                                                ['#DB6B3A', '#e28861', '#e9a688', '#f0c3b0', '#f7e1d7'],
                                                ['#FF141A', '#ff4247', '#ff7175', '#ffa1a3', '#fed0d1']
                                            ]}
                                            triangle={'hide'}
                                            onChange={::this.handleSwatchChange}
                            />
                        </Col>
                        <Col xs="4">
                            <Input defaultValue={this.state.color} onChange={() => {}} />
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