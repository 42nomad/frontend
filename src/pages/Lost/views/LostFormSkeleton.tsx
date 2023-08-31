import React from "react";
import { css } from '@emotion/react'
import tw from "twin.macro";

const skeletonDiv = css`
  ${tw`bg-neutral-200 rounded-xl animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]`}
`

function LostFormSkeleton() {
    return (
        <div className='bg-nomad-sand min-h-full flex flex-col justify-center items-center pt-12'>
            <div className='w-[60%] pb-[60%] bg-neutral-200 mb-5 animate-[pulse_1.5s_cubic-bezier(0.4,0,0.6,1)_infinite]'/>
            <div css={skeletonDiv} className='w-[60%] h-7 mb-2'/>
            <div css={skeletonDiv} className='w-[40%] h-5 mb-5'/>
            <div css={skeletonDiv} className='w-[60%] h-7 mb-3'/>
            <div css={skeletonDiv} className='w-[60%] h-7 mb-3'/>
            <div css={skeletonDiv} className='w-[60%] h-24 mb-5'/>
            <div css={skeletonDiv} className='w-[30%] h-7'/>
        </div>
    )
}

export default LostFormSkeleton;