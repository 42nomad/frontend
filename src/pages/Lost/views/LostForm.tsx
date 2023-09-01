import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import gridDiv from '../../../styles/gridDiv';
import leftDiv from '../../../styles/leftDiv';
import token from '../../../styles/token';
import changeFileImg from '../logics/changeFileImg';
import registButtonClick from '../logics/registButtonClick';
import useLostData from '../logics/useLostData';
import LostFormSkeleton from './LostFormSkeleton';
import deleteButtonClick from '../logics/deleteButtonClick';

function LostForm() {
	const nav = useNavigate();

	const info = useLostData();
	const { postId, location, contents, writer, imgKey, date, mine } = info;

	const [state, setState] = useState(0); // 0: 새 글 1: 글 보기 2: 글 수정
	const [title, setTitle] = useState(location);
	const [descript, setDescript] = useState(contents);

	const params = {
		'postId': postId,
		'title': title,
		'descript': descript,
		'writer': writer,
		'imgKey': imgKey,
		'state': state,
	};

	useEffect(() => {
		setState(postId ? 1 : 0);
		setTitle(location);
		setDescript(contents);
	}, [postId, location, contents]);

	return (
		<>
			<Header />
			{writer !== '' ? (
				<div className="bg-nomad-sand min-h-full flex flex-col justify-center items-center pt-12">
					<label
						htmlFor="file"
						className={`block relative w-[60%] pb-[60%] bg-white ${
							state === 1 ? '' : 'cursor-pointer'
						} shadow-full mb-5`}
					>
						<img
							src={process.env.REACT_APP_IMG_URL + imgKey}
							alt="doc-pic"
							className="absolute w-full h-full object-cover"
						/>
						<input
							type="file"
							id="file"
							accept="image/*"
							className="hidden"
							onChange={(e) => changeFileImg(e)}
							disabled={state === 1}
						/>
					</label>
					<input
						type="text"
						maxLength={10}
						placeholder="습득 위치 입력"
						className="bg-transparent font-nexonBold text-2xl focus:outline-none w-[70%] text-center"
						disabled={state === 1}
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
					<p className="mb-2 font-xs">{date}</p>
					<div css={leftDiv}>
						<div css={token} className="mr-3 w-[6rem]">
							작성자
						</div>
						<span className="text-xl">{writer}</span>
					</div>
					<div css={leftDiv}>
						<div css={token} className="mb-3 w-[6rem]">
							보관 위치
						</div>
						<textarea
							css={gridDiv}
							placeholder="분실물 보관 장소를 적어주세요."
							className="block w-full focus:outline-none bg-transparent h-24 mb-3 resize-none"
							disabled={state === 1}
							value={descript}
							onChange={(e) => setDescript(e.target.value)}
						/>
					</div>
					{state !== 1 && (
						<div>
							<button
								type="button"
								css={token}
								className="mx-1 w-[4.8rem]"
								onClick={() => registButtonClick(params, setState, nav)}
							>
								등록
							</button>
							<button type="button" css={token} className="mx-1 w-[4.8rem]" onClick={() => (state ? setState(1) : nav('/lost'))}>
								취소
							</button>
						</div> /* 글 등록 시 */
					)}
					{state === 1 && (
						<div>
							{mine === true && (
								<><button type="button" css={token} className="mx-1 w-[4.8rem]" onClick={() => setState(2)}>
									수정
								</button>
								<button type="button" css={token} className="mx-1 w-[4.8rem]" onClick={() => deleteButtonClick(postId, imgKey, false, nav)}>
									삭제
								</button></>
							)}
							<button type="button" css={token} className="mx-1 w-[4.8rem]" onClick={() => nav('/lost')}>
								목록
							</button>
						</div> /* 내 글 상세 페이지 */
					)}
				</div>
			) : (
				<LostFormSkeleton />
			)}
		</>
	);
}

export default LostForm;
