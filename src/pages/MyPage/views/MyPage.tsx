import React from 'react';
import SideBar from '../../../components/SideBar/SideBar';

function MyPage() {
	return (
		<>
			<SideBar />
			<div className="bg-nomad-sand h-full grid grid-rows-[29%_23%_30%_8%] gap-[3%] pt-16 pb-3 px-8">
                <div>star</div>
                <div>home</div>
                <div>lost</div>
                <div>logout</div>
            </div>
		</>
	);
}

export default MyPage;
