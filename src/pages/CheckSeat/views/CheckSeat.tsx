import React, { useState } from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import SeatButton from './SeatButton';
import Seat from './Seat';

function CheckSeat() {
	const [isStar, setIsStar] = useState(true);
	return (
		<>
			<SideBar />
			<div id="CheckSeat" className="bg-nomad-sand flex flex-col min-h-full">
				<div id="ButtonHeader" className="flex space-x-1.5 fixed w-full max-w-max-wid pt-20 pl-9 pb-2 bg-nomad-sand">
					<SeatButton buttonName="즐겨찾기" star isStar={isStar} setIsStar={setIsStar} />
					<SeatButton buttonName="히스토리" star={false} isStar={isStar} setIsStar={setIsStar} />
				</div>
				{!isStar && (
					<div className="flex flex-col mt-28 justify-center items-center space-y-2 pb-10 ">
						<Seat seatLocation="C1R1S1" seatStatus="Not" seatUser="heeskim" isStar={isStar} useDay={0} />
						<Seat seatLocation="C1R1S2" seatStatus="로그아웃" logoutTime={1} isStar={isStar} useDay={0} />
						<Seat seatLocation="C1R1S3" seatStatus="Not" seatUser="heeskim" isStar={isStar} useDay={1} />
						<Seat seatLocation="C1R1S4" seatStatus="Not" seatUser="sojoo" isStar={isStar} useDay={3} />
						<Seat seatLocation="C1R1S5" seatStatus="Not" seatUser="hyunjcho" isStar={isStar} useDay={5} />
					</div>
				)}
				{isStar && (
					<div className="flex flex-col mt-28 justify-center items-center space-y-2 pb-10">
						<Seat seatLocation="C1R1S1" seatStatus="Not" seatUser="heeskim" isStar={isStar} />
						<Seat seatLocation="C1R1S2" seatStatus="로그아웃" logoutTime={1} isStar={isStar} />
						<Seat seatLocation="C1R1S3" seatStatus="Not" seatUser="heeskim" isStar={isStar} />
						<Seat seatLocation="C1R1S4" seatStatus="Not" seatUser="sojoo" isStar={isStar} />
						<Seat seatLocation="C1R1S5" seatStatus="Not" seatUser="hyunjcho" isStar={isStar} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={1} isStar={isStar} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={33} isStar={isStar} />
						<Seat seatLocation="C1R1S1" seatStatus="로그아웃" logoutTime={1} isStar={isStar} />
						<Seat seatLocation="C1R1S1" seatStatus="자리 사용 가능" isStar={isStar} />
						<div
							id="Seat"
							className="bg-nomad-disable bg-opacity-50 text-gray-500 rounded-3xl text-md w-5/6 h-14 pt-3 pl-5 pr-5 pb-3 flex justify-center items-center"
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
		</>
	);
}

export default CheckSeat;
