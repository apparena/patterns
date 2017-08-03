import React from 'react';
import {Card, CardsList} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component {
    render() {
        return (
            <CardsList>
                <Card>
                    <h4 type="card-title">Card Title 1</h4>
                    <p type="card-block">This is a card block you can enter some content in here</p>
                    <p type="card-footer">
                        <small>A little footer</small>
                    </p>
                </Card>
                <Card>
                    <h4 type="card-title">Card Title 2</h4>
                    <p type="card-block">This is a card block you can enter some content in here</p>
                    <p type="card-footer">
                        <small>A little footer</small>
                    </p>
                </Card>
                <Card>
                    <h4 type="card-title">Card Title 3</h4>
                    <p type="card-block">This is a card block you can enter some content in here</p>
                    <p type="card-footer">
                        <small>A little footer</small>
                    </p>
                </Card>
            </CardsList>
        );
    }
}