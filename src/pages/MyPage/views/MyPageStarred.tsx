/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import gridDiv from '../../../styles/gridDiv';
import StarredLine from './StarredLine';
import FoldButton from './FoldButton';

function MyPageStarred() {
    const [open, setOpen] = useState(false);

	return (
        <div css={gridDiv}>
            <p className='font-nexonBold text-lg'>⭐️ 즐겨찾는 자리 관리</p>
            <p className='font-nexonLight text-xs mb-3'>등록한 자리를 삭제하거나 추가할 수 있어요.</p>
            <FoldButton open={open} setOpen={setOpen}/>
            <div className={`grid grid-cols-2 gap-y-2 gap-x-5 mt-3 ${open ? '' : 'hidden'}`}>
                <button type='button' className='flex justify-center'>
                    <span className='mr-3'>자리 추가</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 fill-nomad-green stroke-nomad-sand">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>
                <StarredLine />
                <StarredLine />
            </div>
        </div>
	);
}

export default MyPageStarred;
