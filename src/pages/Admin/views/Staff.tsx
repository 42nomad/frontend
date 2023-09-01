import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import SeatTab from '../../CheckSeat/views/SeatTab';
import 'react-datepicker/dist/react-datepicker.css';
import StatStarred from './StatStarred';
import StatMeeting from './StatMeeting';
import ExcelHeader from '../../../interfaces/ExcelHeader';
import ExcelData from '../../../interfaces/ExcelData';

const clusters = [
	{ id: 0, name: '전체' },
	{ id: 1, name: '1' },
	{ id: 2, name: '2' },
	{ id: 3, name: '3' },
	{ id: 4, name: '4' },
	{ id: 5, name: '5' },
	{ id: 6, name: '6' },
	{ id: 11, name: 'x1' },
	{ id: 12, name: 'x2' },
];

function Staff() {
	const [currentTab, setCurrentTab] = useState(1);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [sortingOption, setSortingOption] = useState(0);
	const [cluster, setCluster] = useState(clusters[0]);

	let headers: ExcelHeader[] = [];
	if (currentTab === 1)
		headers = [
			{ label: 'index', key: 'index' },
			{ label: 'location', key: 'location' },
			{ label: 'count', key: 'count' },
		];
	else
		headers = [
			{ label: 'index', key: 'index' },
			{ label: 'cluster', key: 'cluster' },
			{ label: 'location', key: 'location' },
			{ label: 'count', key: 'count' },
			{ label: 'time', key: 'time' },
		];

	const [excelData, setExcelData] = useState<ExcelData[]>([]);
	useEffect(() => {
		// getAdminRole().then((res) => {
		// 	console.log(res.data);
		// 	if (res.data === 0) window.location.href = '/';
		// });
		document.title = '42nomad Staff';
		setExcelData([]);
	}, [currentTab]);

	const getExcelData = () => {
		// api조회
		// if (currentTab === 1) {
		// 	getStatMeeting(startDate, endDate, sortingOption)
		// 		.then((res) => {
		// 			setExcelData(res.data);
		// 			console.log(excelData);
		// 		});
		// }
		// else {
		// 	getStatCluster(startDate, endDate, cluster.id, sortingOption).then((res)=>{
		// 		setExcelData(res.data);
		// })
		// }
	};

	return (
		<>
			<Link to="/staff" className="w-full max-w-max-wid bg-nomad-sand fixed">
				<div id="Logo" className="flex h-15 mt-4 ml-4 font-fugazRegular text-2xl text-nomad-green cursor-pointer">
					42NOMAD
				</div>
			</Link>
			<div className="bg-nomad-sand h-full">
				<div className="pt-16 pl-10 mb-4">
					<div className="flex items-center text-3xl mr-2">ㄴ통계</div>
				</div>
				<div className="flex items-center space-x-2 mb-2 ml-16">
					<SeatTab buttonName="즐겨찾기" currentTab={currentTab} tabNumber={1} setCurrentTab={setCurrentTab} />
					<SeatTab buttonName="회의실" currentTab={currentTab} tabNumber={2} setCurrentTab={setCurrentTab} />
				</div>
				<div className="bg-white shadow-full shadow-nomad-green/ rounded-xl ml-12 w-fit p-4">
					{currentTab === 1 ? (
						<StatStarred
							startDate={startDate}
							endDate={endDate}
							cluster={cluster}
							clusters={clusters}
							sortingOption={sortingOption}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
							setCluster={setCluster}
							setSortingOption={setSortingOption}
						/>
					) : (
						<StatMeeting
							startDate={startDate}
							endDate={endDate}
							sortingOption={sortingOption}
							setStartDate={setStartDate}
							setEndDate={setEndDate}
							setSortingOption={setSortingOption}
						/>
					)}
				</div>
				<div className="flex items-start space-x-2 mt-3 ml-16">
					<button
						type="button"
						className="w-20 h-8 bg-white rounded-2xl shadow-full shadow-zinc-200"
						onClick={getExcelData}
					>
						조회
					</button>
					<CSVLink
						data={excelData}
						headers={headers}
						filename="통계"
						className="flex justify-center items-center w-36 h-8 bg-white rounded-2xl shadow-full shadow-zinc-200"
					>
						엑셀파일 다운로드
					</CSVLink>
				</div>
				{excelData.length !== 0 && (
					<div className="flex justify-center items-center mt-6">
						<table className="table-fixed border-2 border-collapse">
							<thead className="bg-zinc-200">
								<tr>
									{headers.map((header) => (
										<th className="border-2 px-3" key={header.key}>
											{header.label}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{excelData.map((data, index) => (
									<tr key={data.location} className={`text-center ${index % 2 ? 'bg-zinc-200/50' : ''}`}>
										<td className="border-2 px-2">{index + 1}</td>
										<td className="border-2 px-2">{data.location}</td>
										<td className="border-2 px-2">{data.count}</td>
										{currentTab === 2 && <td className="border-2 px-2">{data.cluster}</td>}
										{currentTab === 2 && <td className="border-2 px-2">{data.time}</td>}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</>
	);
}

export default Staff;
