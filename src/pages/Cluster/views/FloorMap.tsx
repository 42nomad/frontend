import React from 'react';
import FloorMapBox from './FloorMapBox';
import FloorMapProps from '../../../interfaces/FloorMapProps';

function FloorMap({setCluster, density}: FloorMapProps) {
    const leftCluster = [{name: 'c6', idx: 8}, {name: 'c4', idx: 6}, {name: 'cx2', idx: 4}, {name: 'c2', idx: 2}];
    const rightCluster = [{name: 'c5', idx: 7}, {name: 'c3', idx: 5}, {name: 'cx1', idx: 3}, {name: 'c1', idx: 1}];

	return (
        <div className='border-[#7f7f7f] border-2 w-[75%] h-[70%] my-5 flex justify-between bg-white'>
            <div className='h-full w-[43%]'>
                {leftCluster.map((cluster) => (
                    <FloorMapBox cluster={cluster} density={Object.values(density)[Object.keys(density).indexOf(cluster.name)]} setCluster={setCluster} key={cluster.idx}/>
                ))}
            </div>
            <div className='h-full w-[43%]'>
                {rightCluster.map((cluster) => (
                    <FloorMapBox cluster={cluster} density={Object.values(density)[Object.keys(density).indexOf(cluster.name)]} setCluster={setCluster} key={cluster.idx}/>
                ))}
            </div>
        </div>
    )
}

export default FloorMap;
