import React, { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { contentsCenter } from '../../MeetingRoom/views/MapStyle';
import Header from '../../../components/Header/Header';
import SeatTab from './SeatTab';
import SearchSeat from '../../../components/SearchSeat/SearchSeat';
import StarredSeat from './StarredSeat';
import HistorySeat from './HistorySeat';
import GetStarredData from '../logics/GetStarredData';
import GetHistoryData from '../logics/GetHistoryData';

function CheckSeat() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modal = useRef<HTMLDivElement>(null);

	const starredInfo = GetStarredData();
	const historyInfo = GetHistoryData();
	useEffect(() => {
		if (starredInfo.length) setCurrentTab(2);
	}, [starredInfo]);

	return (
		<div>
			<Header />
			<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-screen">
				<div id="TabHeader" className="flex space-x-1.5 fixed w-full max-w-max-wid pt-20 pl-9 pb-2 bg-nomad-sand">
					<SeatTab buttonName="자리검색" tabNumber={1} currentTab={currentTab} setCurrentTab={setCurrentTab} />
					<SeatTab buttonName="즐겨찾기" tabNumber={2} currentTab={currentTab} setCurrentTab={setCurrentTab} />
					<SeatTab buttonName="히스토리" tabNumber={3} currentTab={currentTab} setCurrentTab={setCurrentTab} />
				</div>
				{currentTab === 1 && (
					<div className="flex flex-col mt-32 justify-center items-center">
						<SearchSeat />
					</div>
				)}
				{currentTab === 2 && (
					<div className="flex flex-col mt-32 justify-center items-center space-y-2 pb-10">
						{starredInfo?.map((seat) => <StarredSeat key={seat.starredId} seat={seat} />)}
						<div
							id="AddStarredSeat"
							className="bg-nomad-green text-nomad-sand shadow-sm shadow-zinc-900/5 rounded-3xl text-md w-5/6 h-14 pt-3 pl-5 pr-5 pb-3"
							css={contentsCenter}
						>
							<PlusCircleIcon
								className="w-10 h-10"
								onClick={() => {
									setIsModalOpen(true);
								}}
							/>
						</div>
						{isModalOpen && (
							<div ref={modal} className="fixed top-0 left-0 w-full h-full backdrop-blur-sm" css={contentsCenter}>
								<SearchSeat />
							</div>
						)}
					</div>
				)}
				{currentTab === 3 && (
					<div className="flex-col mt-32 space-y-2 pb-10" css={contentsCenter}>
						{historyInfo.map((seat) => (
							<HistorySeat key={seat.location + seat.usedTime} seat={seat} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default CheckSeat;
