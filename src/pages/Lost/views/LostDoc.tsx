import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircleIcon } from '@heroicons/react/24/outline';
import lostDocClick from '../logics/lostDocClick';
import LostDocProps from '../../../interfaces/LostDocProps';
import deleteButtonClick from '../logics/deleteButtonClick';

function LostDoc({ isMyPage, docData }: LostDocProps) {
	const { postId, location, imgKey, date } = docData;
	const nav = useNavigate();

	return (
		<div className={`text-center cursor-pointer bg-white rounded-xl p-3 ${isMyPage ? 'pb-0' : ''} shadow-full`} id={`doc-${postId}`}>
			<div onClick={() => lostDocClick(nav, postId)} aria-hidden>
				<div className="relative pb-[100%] mb-2">
					<img src={process.env.REACT_APP_IMG_URL + imgKey} className="absolute object-cover w-full h-full rounded-lg" alt="lost-img" />
				</div>
				<p className={`${postId ? 'font-nexonBold' : ''} text-lg truncate`}>{location}</p>
				<p className="text-xs">{date}</p>
			</div>
			<button type="button" aria-label="delete-button" className={`${isMyPage ? '' : 'hidden'}`}
				onClick={() => deleteButtonClick(postId, imgKey, true, nav)}>
				<XCircleIcon className="w-7 h-7 fill-red-500/90 stroke-white" />
			</button>
		</div>
	);
}

export default LostDoc;
