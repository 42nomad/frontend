import React, { useState } from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import SeatButton from './SeatButton';
import Seat from './Seat';

function CheckSeat() {
	const [isStarred, setIsStarred] = useState(true);
	return (
		<div>
			<SideBar />
			<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-screen">
				<div id="ButtonHeader" className="flex space-x-1.5 fixed w-full max-w-max-wid pt-20 pl-9 pb-2 bg-nomad-sand">
					<SeatButton buttonName="즐겨찾기" starred isStarred={isStarred} setIsStarred={setIsStarred} />
					<SeatButton buttonName="히스토리" starred={false} isStarred={isStarred} setIsStarred={setIsStarred} />
				</div>
				{!isStarred && (
					<div className="flex flex-col mt-32 justify-center items-center space-y-2 pb-10 ">
						<Seat seatLocation="C1R1S1" seatStatus="Not" seatUser="heeskim" isStarred={isStarred} useDay={0} />
						<Seat seatLocation="C1R1S2" seatStatus="로그아웃" logoutTime={1} isStarred={isStarred} useDay={0} />
						<Seat seatLocation="C1R1S3" seatStatus="Not" seatUser="heeskim" isStarred={isStarred} useDay={1} />
						<Seat seatLocation="C1R1S4" seatStatus="Not" seatUser="sojoo" isStarred={isStarred} useDay={3} />
						<Seat seatLocation="C1R1S5" seatStatus="Not" seatUser="hyunjcho" isStarred={isStarred} useDay={5} />
					</div>
				)}
				{isStarred && (
					<div className="flex flex-col mt-32 justify-center items-center space-y-2 pb-10">
						<Seat seatLocation="C1R1S1" seatStatus="Not" seatUser="heeskim" isStarred={isStarred} />
						<Seat seatLocation="C1R1S2" seatStatus="로그아웃" logoutTime={1} isStarred={isStarred} />
						<Seat seatLocation="C1R1S3" seatStatus="Not" seatUser="heeskim" isStarred={isStarred} />
						<Seat seatLocation="C1R1S4" seatStatus="Not" seatUser="sojoo" isStarred={isStarred} />
						<Seat seatLocation="C1R1S5" seatStatus="Not" seatUser="hyunjcho" isStarred={isStarred} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={1} isStarred={isStarred} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={33} isStarred={isStarred} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={1} isStarred={isStarred} />
						<Seat seatLocation="C1R1S1" seatStatus="사용 가능" isStarred={isStarred} />
						<div
							id="Seat"
							className="bg-nomad-green text-nomad-sand  shadow-sm shadow-zinc-900/5 rounded-3xl text-md w-5/6 h-14 pt-3 pl-5 pr-5 pb-3 flex justify-center items-center"
						>
							<button type="button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-10 h-10"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default CheckSeat;
