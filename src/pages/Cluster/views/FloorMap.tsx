import React from 'react';
import FloorMapBox from './FloorMapBox';

function FloorMap() {
	return (
        <div className='border border-black w-[80%] h-[70%] my-5 flex justify-between'>
            <div className='h-full w-[40%]'>
                <FloorMapBox />
                <FloorMapBox />
                <FloorMapBox />
                <FloorMapBox />
            </div>
            <div className='h-full w-[40%]'>
                <FloorMapBox />
                <FloorMapBox />
                <FloorMapBox />
                <FloorMapBox />
            </div>
        </div>
    )
}

export default FloorMap;
