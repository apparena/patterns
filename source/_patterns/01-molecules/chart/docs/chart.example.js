import React from 'react';
import {Chart} from 'apparena-patterns-react';

export default function ChartExample({config}){
    return(
        <Chart type="chart" config={config}/>
    )
}

/*;;usage
<ChartExample config="?" />
;;*/