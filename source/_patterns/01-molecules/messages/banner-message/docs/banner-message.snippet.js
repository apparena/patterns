import React from 'react';
import {BannerMessage} from 'apparena-patterns-react';

export default class MyAwesomeClass extends React.Component{
    render(){
        return(
            <BannerMessage type="warning" icon="atoms-1">
                <p>This is the place for some content</p>
            </BannerMessage>
        )
    }
}