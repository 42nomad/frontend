/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'

const arrow = css`
    margin: 0 0.75rem;
    width: 3rem;
    height: 3rem;
    background-size: cover;
`

function MapNav() {
	return (
        <div className='flex justify-center items-center my-3'>
            <button type='button' aria-label='left-button' css={arrow} className='bg-[url("../assets/images/ArrowLeft.svg")]'/>
            <span className='font-nexonBold text-2xl'>클러스터 활성도</span>
            <button type='button' aria-label='right-button' css={arrow} className='bg-[url("../assets/images/ArrowRight.svg")]'/>
        </div>
    )
}

export default MapNav;
