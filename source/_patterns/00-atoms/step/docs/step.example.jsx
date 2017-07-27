import React from "react";
import {ReactComponent, Step} from "apparena-patterns-react";

export default class StepExample extends ReactComponent {

    getInitState() {
        this.handleStepChange1 = this.activateStep.bind(this, '1');
        this.handleStepChange2 = this.activateStep.bind(this, '2');
        return {
            activeStep: ''
        };
    }

    activateStep(activeStep) {
        if (this.state.activeStep === activeStep) {
            this.setState({
                activeStep: ''
            });
        } else {
            this.setState({
                activeStep
            });
        }
    }

    render() {
        return (
            <div>
                <Step
                    onClick={this.handleStepChange1}
                    active={this.state.activeStep === '1'}
                    btnText={'Edit'}
                    btnTextDone={'Done'}
                    done={false}
                    title={'Title 1'}
                    topic={'Topic 1'}
                >
                    <div>
                        Step 1
                    </div>
                </Step>
                <Step
                    onClick={this.handleStepChange2}
                    active={this.state.activeStep === '2'}
                    btnText={'Edit'}
                    btnTextDone={'Done'}
                    done
                    title={'Title 2'}
                    topic={'Topic 2'}
                >
                    <div>
                        Step 2
                    </div>
                </Step>
            </div>
        )
    }
}