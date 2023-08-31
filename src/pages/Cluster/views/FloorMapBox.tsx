import React from 'react';
import FloorMapBoxProps from '../../../interfaces/FloorMapBoxProps';

function FloorMapBox({cluster, density, setCluster}: FloorMapBoxProps) {
	return (
        <div className={`h-[25%] cursor-pointer flex justify-center items-center font-nexonBold text-3xl 
            ${(cluster.idx === 1 || cluster.idx === 2) ? '' : 'border-b-2'}
            ${cluster.idx % 2 === 0 ? 'border-r-2' : 'border-l-2'} border-[#7f7f7f]`}
            style={{backgroundColor: `${density ? `rgba(32, 99, 63, ${density}` : '#e5e5e5'}`}}
            onClick={()=>setCluster(cluster.idx)} aria-hidden = "true">{cluster.name}</div>
    )
}

export default FloorMapBox;
