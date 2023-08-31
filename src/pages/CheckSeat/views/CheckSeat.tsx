import React, { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SideBar from '../../../components/SideBar/views/SideBar';
import SeatButton from './SeatButton';
import Seat from './Seat';
import SearchSeat from '../../../components/SearchSeat/SearchSeat';
import { contentsCenter } from '../../MeetingRoom/views/MapStyle';
import nomadAxios from '../../../utils/nomadAxios';

interface Starred {
	starredId: number;
	location: string;
	cadet: string;
	elapsedTime: number;
	isAvailable: boolean;
}

interface History {
	location: string;
	cadet: string;
	elapsedTime: number;
	isAvailable: boolean;
	usedTime: string;
}

function CheckSeat() {
	const [currentTab, setCurrentTab] = useState(2);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [starred, setStarred] = useState<Starred[] | null>(null);
	const [history, setHistory] = useState<History[] | null>(null);
	const modal = useRef<HTMLDivElement>(null);

	const getStarred = () => {
		nomadAxios.get('member/favorite').then((res) => {
			setStarred(res.data);
		});
	};

	const getHistory = () => {
		nomadAxios.get('member/history').then((res) => {
			setHistory(res.data);
		});
	};

	useEffect(() => {
		getStarred();
		getHistory();
		// if (starred) setCurrentTab(1);
	}, []);

	const starredInfo = starred?.map((seat) => (
		<Seat
			key={seat.starredId}
			location={seat.location.toUpperCase()}
			isAvailable={seat.isAvailable}
			cadet={seat.cadet}
			elapsedTime={seat.elapsedTime}
		/>
	));

	const historyInfo = history?.map((seat) => (
		<Seat
			key={seat.location + seat.usedTime}
			location={seat.location.toUpperCase()}
			isAvailable={seat.isAvailable}
			cadet={seat.cadet}
			elapsedTime={seat.elapsedTime}
			usedTime={seat.usedTime}
		/>
	));

	// 즐겨찾기된 자리가 있을 경우 즐겨찾기를 currentTab으로 설정해야함
	return (
		<div>
			<SideBar />
			<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-screen">
				<div id="ButtonHeader" className="flex space-x-1.5 fixed w-full max-w-max-wid pt-20 pl-9 pb-2 bg-nomad-sand">
					<div
						className={`flex border-collapse rounded-2xl w-8 h-8 shadow-full shadow-zinc-900/10 items-center justify-center ${
							currentTab === 1 ? 'bg-nomad-green' : 'bg-white'
						}`}
					>
						<MagnifyingGlassIcon
							className={`w-6 h-6 ${currentTab === 1 ? 'text-nomad-sand' : 'stroke-1 text-gray-700'}`}
							onClick={() => {
								setCurrentTab(1);
							}}
						/>
					</div>
					<SeatButton buttonName="즐겨찾기" tabNumber={2} currentTab={currentTab} setCurrentTab={setCurrentTab} />
					<SeatButton buttonName="히스토리" tabNumber={3} currentTab={currentTab} setCurrentTab={setCurrentTab} />
				</div>
				{currentTab === 1 && (
					<div className="flex flex-col mt-32 justify-center items-center">
						<SearchSeat />
					</div>
				)}
				{currentTab === 2 && (
					<div className="flex flex-col mt-32 justify-center items-center space-y-2 pb-10">
						{starredInfo}
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
						{historyInfo}
					</div>
				)}
			</div>
		</div>
	);
}

export default CheckSeat;
