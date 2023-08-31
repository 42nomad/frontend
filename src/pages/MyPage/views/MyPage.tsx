import React from 'react';
import SideBar from '../../../components/SideBar/views/SideBar';
import MyPageStarred from './MyPageStarred';
import MyPageHome from './MyPageHome';
import MyPageLost from './MyPageLost';

function MyPage() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand min-h-full flex flex-col pt-20 pb-10 px-8">
				<MyPageHome />
                <MyPageStarred />
				<MyPageLost />
                <div className='bg-nomad-green rounded-xl shadow-full text-nomad-sand text-lg text-center h-[3rem] leading-[3rem]'>로그아웃</div>
            </div>
		</>
	);
}

export default MyPage;
