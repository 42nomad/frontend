import React from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import StatProps from '../../../interfaces/StatProps';

function StatMeeting({ startDate, endDate, sortingOption, setStartDate, setEndDate, setSortingOption }: StatProps) {
	return (
		<>
			<div id="staticDateHeader" className="flex items-center">
				<DatePicker
					className="rounded-lg text-sm flex items-center border-2 border-nomad-green w-28 h-8 text-center focus:outline-none shadow-lg shadow-zinc-300"
					dateFormat="yyyy-MM-dd"
					minDate={new Date('2023-09-01')}
					maxDate={new Date()}
					closeOnScroll
					locale={ko}
					selected={startDate}
					onChange={(date) => {
						if (date) setStartDate(date);
					}}
					shouldCloseOnSelect
				/>
				<div className="mx-2">~</div>
				<DatePicker
					className="z-20 rounded-lg text-sm flex items-center border-2 border-nomad-green w-28 h-8 text-center focus:outline-none shadow-lg shadow-zinc-300"
					dateFormat="yyyy-MM-dd"
					minDate={new Date('2023-09-01')}
					maxDate={new Date()}
					closeOnScroll
					locale={ko}
					selected={endDate}
					onChange={(date) => {
						if (date) setEndDate(date);
					}}
					shouldCloseOnSelect
				/>
			</div>
			<div className="flex items-start space-x-5 mt-3">
				<div id="sorting" className="flex flex-row space-x-2">
					<div className="h-10 flex items-center justify-center font-nexonLight">정렬</div>
					<div
						id="dropdown"
						className="mt-1 bg-white divide-y divide-gray-100 rounded-lg shadow-lg shadow-zinc-300 w-24"
					>
						<div className="space-y-0.5 rounded-lg text-sm text-gray-700">
							<div
								className={`h-8 flex  rounded-lg  hover:ring-nomad-green hover:ring-2 ${
									sortingOption === 0 ? 'ring-nomad-green ring-2' : ''
								} `}
							>
								<button
									className="w-full"
									type="button"
									onClick={() => {
										setSortingOption(0);
									}}
								>
									없음
								</button>
							</div>
							<div
								className={`h-8 flex  rounded-lg  hover:ring-nomad-green hover:ring-2 ${
									sortingOption === 1 ? 'ring-nomad-green ring-2' : ''
								} `}
							>
								<button
									className="w-full"
									type="button"
									onClick={() => {
										setSortingOption(1);
									}}
								>
									사용 횟수
								</button>
							</div>
							<div
								className={`h-8 flex self-center rounded-lg hover:ring-nomad-green hover:ring-2 ${
									sortingOption === 2 ? 'ring-nomad-green ring-2' : ''
								} `}
							>
								<button
									className="w-full"
									type="button"
									onClick={() => {
										setSortingOption(2);
									}}
								>
									누적 시간
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default StatMeeting;
