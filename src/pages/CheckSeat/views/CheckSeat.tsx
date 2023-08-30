import React, { useRef, useState } from 'react';
import { PlusCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SideBar from '../../../components/SideBar/views/SideBar';
import SeatButton from './SeatButton';
import Seat from './Seat';
import SearchSeat from '../../../components/SearchSeat/SearchSeat';
import { contentsCenter } from '../../MeetingRoom/views/MapStyle';

function CheckSeat() {
	const [tab, setTab] = useState(1);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const modal = useRef<HTMLDivElement>(null);

	return (
		<div>
			<SideBar />
			<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-screen">
				<div id="ButtonHeader" className="flex space-x-1.5 fixed w-full max-w-max-wid pt-20 pl-9 pb-2 bg-nomad-sand">
					<div
						className={`flex border-collapse rounded-2xl w-8 h-8 shadow-full shadow-zinc-900/10 items-center justify-center ${
							tab === 1 ? 'bg-nomad-green' : 'bg-white'
						}`}
					>
						<MagnifyingGlassIcon
							className={`w-6 h-6 ${tab === 1 ? 'text-nomad-sand' : 'stroke-1 text-gray-700'}`}
							onClick={() => {
								setTab(1);
							}}
						/>
					</div>
					<SeatButton buttonName="즐겨찾기" tabNumber={2} tab={tab} setTab={setTab} />
					<SeatButton buttonName="히스토리" tabNumber={3} tab={tab} setTab={setTab} />
				</div>
				{tab === 3 && (
					<div className="flex-col mt-32 space-y-2 pb-10" css={contentsCenter}>
						<Seat location="C1R1S1" isAvailable={false} cadet="heeskim" elapsedTime={-1} usedTime="0분" />
						<Seat location="C1R1S2" isAvailable cadet={null} elapsedTime={1} usedTime="2시간" />
						<Seat location="C1R1S3" isAvailable={false} cadet="heeskim" elapsedTime={-1} usedTime="1일" />
						<Seat location="C1R1S4" isAvailable={false} cadet="sojoo" elapsedTime={-1} usedTime="3일" />
						<Seat location="C1R1S5" isAvailable={false} cadet="hyunjcho" elapsedTime={-1} usedTime="5일" />
					</div>
				)}
				{tab === 2 && (
					<div className="flex flex-col mt-32 justify-center items-center space-y-2 pb-10">
						<Seat location="C1R1S1" isAvailable={false} cadet="heeskim" elapsedTime={-1} />
						<Seat location="C1R1S2" isAvailable cadet={null} elapsedTime={1} />
						<Seat location="C1R1S3" isAvailable={false} cadet="heeskim" elapsedTime={-1} />
						<Seat location="C1R1S4" isAvailable={false} cadet="sojoo" elapsedTime={-1} />
						<Seat location="C1R1S5" isAvailable={false} cadet="hyunjcho" elapsedTime={-1} />
						<Seat location="C1R1S1" isAvailable cadet={null} elapsedTime={1} />
						<Seat location="C1R1S1" isAvailable cadet={null} elapsedTime={33} />
						<Seat location="C1R1S1" isAvailable cadet={null} elapsedTime={1} />
						<Seat location="C1R1S1" isAvailable cadet={null} elapsedTime={-1} />
						<div
							id="Seat"
							className="bg-nomad-green text-nomad-sand  shadow-sm shadow-zinc-900/5 rounded-3xl text-md w-5/6 h-14 pt-3 pl-5 pr-5 pb-3"
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
				{tab === 1 && (
					<div className="flex flex-col mt-32 justify-center items-center">
						<SearchSeat />
					</div>
				)}
			</div>
		</div>
	);
}

export default CheckSeat;
