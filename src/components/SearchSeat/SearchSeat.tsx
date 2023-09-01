import React, { useState } from 'react';
import ComboBox from './ComboBox';
import nomadAxios from '../../utils/nomadAxios';
import seatInfo from '../../pages/CheckSeat/logics/SeatInfo';
import { useAppDispatch } from '../../store/hooks';
import { addStarred } from '../../store/starredReducer';
import SearchSeatData from '../../interfaces/SearchSeatData';

const clusters = [
	{ id: 1, name: '1' },
	{ id: 2, name: '2' },
	{ id: 3, name: '3' },
	{ id: 4, name: '4' },
	{ id: 5, name: '5' },
	{ id: 6, name: '6' },
	{ id: 11, name: 'x1' },
	{ id: 12, name: 'x2' },
];

const rows = [
	{ id: 1, name: '1' },
	{ id: 2, name: '2' },
	{ id: 3, name: '3' },
	{ id: 4, name: '4' },
	{ id: 5, name: '5' },
	{ id: 6, name: '6' },
	{ id: 7, name: '7' },
	{ id: 8, name: '8' },
	{ id: 9, name: '9' },
	{ id: 10, name: '10' },
	{ id: 11, name: '11' },
];

function SearchSeat() {
	const [isStarred, setIsStarred] = useState<boolean>(false);
	const [searchResult, setSearchResult] = useState<string>('');
	const [cluster, setCluster] = useState(clusters[0]);
	const [row, setRow] = useState(rows[0]);
	const [seat, setSeat] = useState(rows[0]);
	const dispatch = useAppDispatch();
	const [info, setInfo] = useState<SearchSeatData>();

	const location = `C${cluster.name}R${row.name}S${seat.name}`;

	const handleSearchClick = () => {
		nomadAxios.get(`/member/search/${location}`).then((res) => {
			setInfo(res.data);
			if (info) {
				setSearchResult(seatInfo(info.isAvailable, info.cadet, info.elapsedTime));
				setIsStarred(info.isStarred);
			}
		});
	};

	const handleAddStarred = async () => {
		if (isStarred) return;

		const res = await nomadAxios.post(`/member/favorite/${location}`);
		setIsStarred(true);
		dispatch(addStarred({ ...info, isNoti: false, notificationId: 0, starredId: res.data }));
	};
	return (
		<div
			className={`mt-2 shadow-full shadow-zinc-300 bg-white text-black rounded-3xl flex flex-col space-y-1 justify-center w-72 ${
				searchResult ? 'h-36' : 'h-20'
			}`}
		>
			<div className="flex flex-row justify-center items-center space-x-1">
				<div className="text-xl">C</div>
				<ComboBox inputTextSize="text-xl" options={clusters} selectedOne={cluster} setSelected={setCluster} />
				<div className="text-xl">R</div>
				<ComboBox inputTextSize="text-xl" options={rows} selectedOne={row} setSelected={setRow} />
				<div className="text-xl">S</div>
				<ComboBox inputTextSize="text-xl" options={rows} selectedOne={seat} setSelected={setSeat} />
				<button
					type="button"
					className="rounded-3xl bg-nomad-green text-nomad-sand w-12 h-6"
					onClick={handleSearchClick}
				>
					검색
				</button>
			</div>
			{searchResult && (
				<div className="flex flex-col justify-center items-center space-y-2">
					<div className="flex justify-center items-center">{searchResult}</div>
					<button
						type="button"
						className={`rounded-3xl text-sm  text-nomad-sand w-28 h-6 ${
							isStarred ? 'bg-meeting-disable' : 'bg-nomad-green'
						}`}
						onClick={() => {
							handleAddStarred();
						}}
					>
						{isStarred ? '즐겨찾기 완료' : '즐겨찾기 추가'}
					</button>
				</div>
			)}
		</div>
	);
}

export default SearchSeat;
