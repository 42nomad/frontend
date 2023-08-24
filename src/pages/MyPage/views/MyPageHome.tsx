/** @jsxImportSource @emotion/react */
import React from "react";
import gridDiv from '../../../styles/gridDiv';
import HomeRadioGroup from "./HomeRadioGroup";

function MyPageHome() {
    return (
        <div css={gridDiv}>
            <div className='flex flex-col h-full'>
                <p className='font-nexonBold text-lg'>🏠 홈 화면 설정</p>
                <p className='font-nexonLight text-xs'>로그인 후 가장 먼저 보여질 페이지를 정할 수 있어요.</p>
                <HomeRadioGroup />
            </div>
        </div>
    )
}

export default MyPageHome;