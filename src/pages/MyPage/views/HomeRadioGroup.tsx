/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { css } from "@emotion/react";

const radioOption = css`
    box-shadow: 0 0 3px 0 #d4d4d8;
    border-radius: 0.75rem;
    width: 70%;
    height: 1.5rem;
    line-height: 1.5rem;
    display: inline-block;
`

function HomeRadioGroup() {
    const [home, setHome] = useState('startup')

    return (
        <div className='text-center overflow-auto mt-2 pt-1 text-sm'>
            <RadioGroup value={home} onChange={setHome} className='grid grid-cols-2 gap-y-3'>
                <RadioGroup.Option value="checkseat">
                    {({ checked }) => (
                    <span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>자리 확인</span>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="clustermap">
                    {({ checked }) => (
                    <span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>클러스터 맵</span>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="meetingroom">
                    {({ checked }) => (
                    <span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>회의실 맵</span>
                    )}
                </RadioGroup.Option>
                <RadioGroup.Option value="lost">
                    {({ checked }) => (
                    <span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>분실물 게시판</span>
                    )}
                </RadioGroup.Option>
            </RadioGroup>
            <button type='button' className='text-center bg-nomad-green text-nomad-sand rounded-xl w-[25%] mt-4 h-6'>저장</button>
        </div>
    )
}  

export default HomeRadioGroup;