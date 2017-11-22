import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader, ProgressBar, ReactComponent} from 'apparena-patterns-react';

export default class ModalExample extends ReactComponent {
    getInitState() {
        return {
            modalVisible: false
        }
    }

    openModal() {
        this.setState({
            modalVisible: true
        });
    }

    closeModal() {
        this.setState({
            modalVisible: false
        });
    }

    renderModal() {
        return (
            <Modal
                size="xl"
                type="primary"
            >
                <ModalHeader
                    headerText="Modal"
                    onClose={::this.closeModal}
                />
                <ModalBody>
                    <p>I am the modal body. <b>You</b> can write cool things here or embed components</p>
                    <ProgressBar
                        value={40}
                        maxValue={100}
                        minWidth={4}
                        type="success"
                        striped
                        animated
                    />
                </ModalBody>
                <ModalFooter>
                    <Button
                        type="primary"
                        onClick={::this.closeModal}
                    >
                        Close the modal
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }

    render() {
        return (
            <div>
                <Button onClick={::this.openModal}>Show the modal</Button>
                {this.state.modalVisible && this.renderModal()}
            </div>
        );
    }
}

/*;;usage
<ModalExample />
;;*/