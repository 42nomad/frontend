import React, { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import gridDiv from '../../../styles/gridDiv';
import StarredLine from './StarredLine';
import FoldButton from './FoldButton';
import useMyPageStarred from '../logics/useMyPageStarred';

function MyPageStarred() {
	const [open, setOpen] = useState(false);
	const starredData = useMyPageStarred();

	return (
		<div css={gridDiv}>
			<p className="font-nexonBold text-lg">⭐️ 즐겨찾는 자리 관리</p>
			<p className="font-nexonLight text-xs mb-3">등록한 자리를 삭제하거나 추가할 수 있어요.</p>
			<FoldButton open={open} setOpen={setOpen} />
			<div className={`grid grid-cols-2 gap-y-2 gap-x-5 mt-3 ${open ? '' : 'hidden'}`}>
				<button type="button" className="flex justify-center">
					<span className="mr-3">자리 추가</span>
					<PlusCircleIcon className='w-6 h-6 fill-nomad-green stroke-nomad-sand'/>
				</button>
				{starredData.map((seat) => (<StarredLine id={seat.id} location={seat.location} key={seat.id}/>))}
			</div>
		</div>
	);
}

export default MyPageStarred;
