import React from 'react';
import PropTypes from 'prop-types';
import ReactComponent from '../../../react-utils/component';
import Button from '../../button/button';
import Col from '../../grid/col';
import Row from '../../grid/row';
import ColorPicker from './colorPicker';
import SketchPicker from './sketchPicker';
import styles from './index.scss';

export default class Color extends ReactComponent {
    static propTypes = {
        handleClick: PropTypes.func,
        displayColorPicker: PropTypes.bool,
        presetColors: PropTypes.array,
        value: PropTypes.string,
        onChange: PropTypes.func,
        showOnlyPicker: PropTypes.bool
    };

    renderColorPicker() {
        if (this.props.displayColorPicker) {
            return (
                <div className={styles.popover}>
                    <div className={styles.cover} onClick={this.props.handleClick}/>
                    <div className={styles.wrapper}>
                        <ColorPicker
                            width="100%"
                            presetColors={this.props.presetColors}
                            color={this.props.value}
                            onChange={this.props.onChange}
                            onInputChange={this.props.onInputChange}
                            onSubmit={this.props.onSubmit}
                            handleClose={this.props.handleClick}
                        />
                    </div>
                </div>
            );
        }
    }

    render() {
        if (this.props.showOnlyPicker) {
            return (
                <SketchPicker
                    width="100%"
                    presetColors={this.props.presetColors}
                    color={this.props.value}
                    onChange={this.props.onChange}
                    onClose={this.props.handleClose}
                />
            );
        }
        return (
            <div className={styles.div}>
                <Row>
                    <Col xs="12">
                        <div className={styles.swatch} onClick={this.props.handleClick}>
                            <div className={styles.color} style={{
                                backgroundColor: this.props.value
                            }}/>
                        </div>
                        <Button
                            type="outline-primary"
                            onClick={this.props.handleClick}
                        >
                            {this.t('configTypes.color.select_color')}
                        </Button>
                    </Col>
                </Row>
                {this.renderColorPicker()}
            </div>
        );
    }
}
