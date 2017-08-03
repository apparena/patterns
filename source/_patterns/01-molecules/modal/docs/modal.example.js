import React from 'react';
import {Modal} from 'apparena-patterns-react';

export default function ModalExample() {
    return (
        <Modal type="secondary" scrollable>
            <div className="modal-header">
                <h4>A Modal Title</h4>
            </div>
            <div className="modal-body">
                <p>Content of the body</p>
            </div>
            <div className="modal-footer">
                <p>The footer</p>
            </div>
        </Modal>
    );
}

/*;;usage
<ModalExample />
;;*/