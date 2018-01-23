import React from 'react';
import {Card} from 'apparena-patterns-react';
import Icons from '../../patterns/00-atoms/icons/docs/icons.example'

const title = 'Icons';

function render() {
    return (
        <Card>
            <div type="card-header">
                Corporate identity
            </div>
            <div type="card-body">
                <Icons/>
            </div>
        </Card>
    );
}

export default {
    title,
    render
};