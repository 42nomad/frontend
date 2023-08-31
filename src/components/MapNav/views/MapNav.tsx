import React from 'react';
import { css } from '@emotion/react'

const arrow = css`
    margin: 0 0.75rem;
    width: 3rem;
    height: 3rem;
    background-size: cover;
`

interface MapNavProps {
    mapName: string,
    idx: number,
    setState: React.Dispatch<React.SetStateAction<number>>,
    leftButtonClick: (idx: number, setState: React.Dispatch<React.SetStateAction<number>>) => void,
    rightButtonClick: (idx: number, setState: React.Dispatch<React.SetStateAction<number>>) => void
}

function MapNav({mapName, idx, setState, leftButtonClick, rightButtonClick}: MapNavProps) {
	return (
        <div className='flex justify-center items-center my-3'>
            <button type='button' aria-label='left-button' css={arrow} className='bg-[url("../assets/images/ArrowLeft.svg")]'
                onClick={()=>leftButtonClick(idx, setState)}/>
            <span className='font-nexonBold text-2xl'>{mapName}</span>
            <button type='button' aria-label='right-button' css={arrow} className='bg-[url("../assets/images/ArrowRight.svg")]'
                onClick={()=>rightButtonClick(idx, setState)}/>
        </div>
    )
}

export default MapNav;
