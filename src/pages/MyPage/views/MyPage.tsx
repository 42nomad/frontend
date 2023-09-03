import React, { useState } from 'react';
import MyPageStarred from './MyPageStarred';
import MyPageHome from './MyPageHome';
import MyPageLost from './MyPageLost';
import logoutButtonClick from '../logics/logoutButtonClick';
import SearchSeat from '../../../components/SearchSeat/views/SearchSeat';
import { contentsCenter } from '../../MeetingRoom/views/MapStyle';
import useMyPageStarred from '../logics/useMyPageStarred';
import useMyPageDocs from '../logics/useMyPageDocs';
import Loading from '../../../components/Loading/Loading';

function MyPage() {
	const [modal, setModal] = useState(false);
	const starredData = useMyPageStarred(modal);
	const myDocs = useMyPageDocs();

	return (
		<>
			{(starredData === null || myDocs === null) && <Loading />}
			{starredData && myDocs && (
				<div className="bg-nomad-sand min-h-full flex flex-col pt-20 pb-10 px-8">
					<MyPageHome />
					<MyPageStarred setModal={setModal} starredData={starredData} />
					<MyPageLost myDocs={myDocs} />
					<div
						className="bg-nomad-green rounded-xl shadow-full text-nomad-sand text-lg text-center h-[3rem] leading-[3rem] cursor-pointer"
						onClick={() => logoutButtonClick()}
						aria-hidden
					>
						로그아웃
					</div>
					{modal && (
						<div
							className="fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-brightness-75 z-[60]"
							css={contentsCenter}
							aria-hidden="true"
							onClick={(e) => {
								if (e.target !== e.currentTarget) return;
								setModal(false);
							}}
						>
							<SearchSeat />
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default MyPage;
