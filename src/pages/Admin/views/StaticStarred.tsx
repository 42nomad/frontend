import React from 'react';
import { ko } from 'date-fns/esm/locale';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ComboBox from '../../../components/SearchSeat/ComboBox';

function StaticStarred({
	startDate,
	endDate,
	sortingOption,
	cluster,
	clusters,
	setCluster,
	setStartDate,
	setEndDate,
	setSortingOption,
}: {
	startDate: Date;
	endDate: Date;
	sortingOption: number;
	cluster: { id: number; name: string };
	clusters: { id: number; name: string }[];
	setCluster: any;
	setSortingOption: any;
	setStartDate: any;
	setEndDate: any;
}) {
	return (
		<>
			<div id="staticDateHeader" className="flex items-center">
				<DatePicker
					id="startDate"
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
					id="endDate"
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
						<div className="rounded-lg text-sm space-y-0.5 text-gray-700">
							<div
								className={`h-8 flex rounded-lg hover:ring-nomad-green hover:ring-2 ${
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
								className={`h-8 flex rounded-lg hover:ring-nomad-green hover:ring-2 ${
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
						</div>
					</div>
				</div>
				<div id="cluster" className="flex flex-row items-center space-x-2">
					<div className="font-nexonLight">cluster</div>
					<div className="shadow-lg rounded-xl shadow-zinc-300">
						<ComboBox inputTextSize="text-sm" options={clusters} selectedOne={cluster} setSelected={setCluster} />
					</div>
				</div>
			</div>
		</>
	);
}

export default StaticStarred;
