import React from 'react';
import {Stick, Portal} from 'apparena-patterns-react';

export default class BaseComponent extends React.Component {

    componentDidMount() {
        this.setState({
            foo: 'bar'
        });
    }

    render() {
        return (
            <div>
                <div ref={(ref) => {this.element = ref}}>
                    Test
                </div>
                {this.element &&
                <Portal>
                    <Stick
                        fixed
                        element={this.element}
                    >
                        <div>Stick</div>
                    </Stick>
                </Portal>
                }
            </div>
        );
    }
}