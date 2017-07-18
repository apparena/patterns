import React from 'react';
import {Modal} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <Modal type="secondary" scrollable>
                <div className="modal-header">
                    <h4>The place for a title</h4>
                </div>
                <div className="modal-body">
                    <p>Here you put your content for the modal</p>
                </div>
                <div className="modal-footer">
                    <p>Some place for a little footnote</p>
                </div> 
            </Modal>
        )
    }
}