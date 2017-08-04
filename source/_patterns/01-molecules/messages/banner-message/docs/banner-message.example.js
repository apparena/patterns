import React from 'react';
import {BannerMessage} from 'apparena-patterns-react';

export default function BannerMessageExample() {
    return (
        <BannerMessage type="success" icon="check">
            <h5> Congratulation </h5>
        </BannerMessage>
    );
}

/*;;usage
<BannerMessageExample />
;;*/