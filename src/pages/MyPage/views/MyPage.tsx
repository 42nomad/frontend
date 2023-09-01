import React from 'react';
import Header from '../../../components/Header/Header';
import MyPageStarred from './MyPageStarred';
import MyPageHome from './MyPageHome';
import MyPageLost from './MyPageLost';
import logoutButtonClick from '../logics/logoutButtonClick';

function MyPage() {
	return (
		<>
			<Header />
			<div className="bg-nomad-sand min-h-full flex flex-col pt-20 pb-10 px-8">
				<MyPageHome />
				<MyPageStarred />
				<MyPageLost />
				<div className="bg-nomad-green rounded-xl shadow-full text-nomad-sand text-lg text-center h-[3rem] leading-[3rem] cursor-pointer"
					onClick={()=>logoutButtonClick()} aria-hidden>
					로그아웃
				</div>
			</div>
		</>
	);
}

export default MyPage;
