import React, { useEffect, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { contentsCenter } from '../../MeetingRoom/views/MapStyle';
import SeatTab from './SeatTab';
import SearchSeat from '../../../components/SearchSeat/views/SearchSeat';
import StarredSeat from './StarredSeat';
import HistorySeat from './HistorySeat';
import useStarredData from '../logics/useStarredData';
import useHistoryData from '../logics/useHistoryData';
import Loading from '../../../components/Loading/Loading';

function CheckSeat() {
	const [currentTab, setCurrentTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const starredInfo = useStarredData();
	const historyInfo = useHistoryData();

	useEffect(() => {
		if (starredInfo && starredInfo.length) setCurrentTab(2);
	}, [starredInfo]);

	return (
		<>
			{(starredInfo === null || historyInfo === null) && <Loading />}
			{starredInfo && historyInfo && (
				<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-full">
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
								aria-hidden="true"
								id="AddStarredSeat"
								className="bg-nomad-green text-nomad-sand shadow-sm shadow-zinc-900/5 rounded-3xl text-md w-5/6 h-14 pt-3 pl-5 pr-5 pb-3 cursor-pointer"
								css={contentsCenter}
								onClick={() => {
									setIsModalOpen(true);
								}}
							>
								<PlusCircleIcon className="w-10 h-10" />
							</div>
							{isModalOpen && (
								<div
									className={`${isModalOpen ? 'z-50' : ''} fixed top-0 left-0 w-full h-full backdrop-blur-sm`}
									css={contentsCenter}
									aria-hidden="true"
									onClick={(e) => {
										if (e.target !== e.currentTarget) return;
										setIsModalOpen(false);
									}}
								>
									<SearchSeat />
								</div>
							)}
						</div>
					)}
					{currentTab === 3 && (
						<div className="flex-col mt-32 space-y-2 pb-10" css={contentsCenter}>
							{historyInfo?.map((seat) => <HistorySeat key={seat.location + seat.usedTime} seat={seat} />)}
						</div>
					)}
				</div>
			)}
		</>
	);
}

export default CheckSeat;
