import React from 'react';
import {Button, Col, ProgressTracker, ProgressTrackerStep, ReactComponent, Row} from 'apparena-patterns-react';

export default class ProgressTrackerExample extends ReactComponent {
    getInitState() {
        return {
            activeStep: 1,
            backButtonActive: true,
            fwdButtonActive: true,
        }
    }

    handleStepChange(offset) {
        const newStep = this.state.activeStep + offset;
        let backButtonActive = true, fwdButtonActive = true;

        if (newStep === 0) {
            backButtonActive = false;
        } else if (newStep === 2) {
            fwdButtonActive = false;
        }

        this.setState({
            activeStep: newStep,
            backButtonActive,
            fwdButtonActive
        });
    }

    render() {
        return [
            <ProgressTracker>
                <ProgressTrackerStep text="Downloading" active={this.state.activeStep === 0}/>
                <ProgressTrackerStep text="Installing" active={this.state.activeStep === 1}/>
                <ProgressTrackerStep text="Finish" active={this.state.activeStep === 2}/>
            </ProgressTracker>,
            <Row>
                <Col xs="2" xsOffset={4}>
                    <Button
                        onClick={this.handleStepChange.bind(this, -1)}
                        isDisabled={!this.state.backButtonActive}

                    >
                        Go one step back
                    </Button>
                </Col>
                <Col xs="2">
                    <Button
                        onClick={this.handleStepChange.bind(this, 1)}
                        isDisabled={!this.state.fwdButtonActive}
                    >
                        Go one step forward
                    </Button>
                </Col>
            </Row>
        ];
    }
}

/*;;usage
<ProgressTrackerExample />
;;*/