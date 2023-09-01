import React, { useState } from 'react';
import gridDiv from '../../../styles/gridDiv';
import FoldButton from './FoldButton';
import useMyPageDocs from '../logics/useMyPageDocs';
import LostDoc from '../../Lost/views/LostDoc';

function MyPageLost() {
	const [open, setOpen] = useState(false);
	const myDocs = useMyPageDocs();

	return (
		<div css={gridDiv}>
			<p className="font-nexonBold text-lg">📌 내가 쓴 분실물 게시글</p>
			<p className="font-nexonLight text-xs mb-3">게시글로 이동하거나 바로 삭제할 수 있어요.</p>
			<FoldButton open={open} setOpen={setOpen} />
			<div className={`grid grid-cols-2 gap-4 mt-4 mb-2 ${open ? '' : 'hidden'}`}>
				{myDocs.map((doc) => (<LostDoc isMyPage docData={doc} key={doc.postId} />))}
			</div>
		</div>
	);
}

export default MyPageLost;
