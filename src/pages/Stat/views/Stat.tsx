import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Link } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import StatStarred from './StatStarred';
import StatMeeting from './StatMeeting';
import getStatMeeting from '../../../services/getStatMeeting';
import getStatCluster from '../../../services/getStatCluster';
import ExcelHeader from '../../../interfaces/ExcelHeader';
import ExcelData from '../../../interfaces/ExcelData';
import getAdminRole from '../../../services/getAdminRole';
import getStatClusterAll from '../../../services/getStatClusterAll';
import swalAlert from '../../../utils/swalAlert';

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

function Stat() {
	const [currentTab, setCurrentTab] = useState(1);
	const [startDate, setStartDate] = useState(new Date('2023-09-01'));
	const [endDate, setEndDate] = useState(new Date());
	const [sortingOption, setSortingOption] = useState(0);
	const [cluster, setCluster] = useState(clusters[0]);

	const headers: ExcelHeader[] = [
		{ label: 'index', key: 'index' },
		{ label: 'location', key: 'location' },
		{ label: 'count', key: 'count' },
	];
	if (currentTab === 2) {
		headers.push({ label: 'cluster', key: 'cluster' });
		headers.push({ label: 'time', key: 'time' });
	}

	const [excelData, setExcelData] = useState<ExcelData[]>([]);
	useEffect(() => {
		document.title = '42nomad Stat';
		getAdminRole().then((res) => {
			if (res.data === 0) window.location.href = '/';
		});
	}, []);

	const getExcelData = async () => {
		// api조회
		let res;
		try {
			if (currentTab === 1) {
				if (cluster.id === 0) res = await getStatClusterAll(startDate, endDate, sortingOption);
				else res = await getStatCluster(startDate, endDate, `c${cluster.name}`, sortingOption);
			} else res = await getStatMeeting(startDate, endDate, sortingOption);
			setExcelData(res.data);
			if (res.data.length === 0) swalAlert('해당 기간 내에 출력할 통계정보가 없습니다.');
		} catch (e) {
			swalAlert('변환할 수 없는 날짜입니다. 정보를 다시 입력해주세요.');
		}
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
					<button
						type="button"
						onClick={() => {
							setCurrentTab(1);
							setExcelData([]);
						}}
						className={`border-collapse rounded-2xl w-20 h-8 text-md shadow-full shadow-zinc-900/10
								${currentTab === 1 ? 'bg-nomad-green text-nomad-sand' : 'bg-white text-gray-700 font-nexonLight'}`}
					>
						즐겨찾기
					</button>
					<button
						type="button"
						onClick={() => {
							setCurrentTab(2);
							setExcelData([]);
						}}
						className={`border-collapse rounded-2xl w-20 h-8 text-md shadow-full shadow-zinc-900/10
								${currentTab === 2 ? 'bg-nomad-green text-nomad-sand' : 'bg-white text-gray-700 font-nexonLight'}`}
					>
						회의실
					</button>
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
										{currentTab === 2 && <td className="border-2 px-2">{data.totalUsageTime}</td>}
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

export default Stat;
