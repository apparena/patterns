import React from 'react';
import {Media} from 'apparena-patterns-react';

export default function MediaExample() {
    return (
        <Media
            href="example.com"
            mediaBody="This is the body of a media, in here you have the possibilitie to write something about the media"
            mediaBodyHeader="This is the header"
        >
            <img src="http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png" alt="presentation"/>
        </Media>
    );
}