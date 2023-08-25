import React from 'react';
import ClusterComboBox from './ClusterComboBox';
import RowComboBox from './RowComboBox';

function SearchSeat() {
	const [isStarred, setIsStarred] = React.useState<boolean>(false);
	const [searchResult, setSearchResult] = React.useState<string>('');

	const handleSearchClick = () => {
		setSearchResult('"heeskim" 님께서 사용중입니다');
	};
	return (
		<div
			className={`mt-2 shadow-full shadow-zinc-300 bg-white text-black rounded-3xl flex flex-col space-y-1 justify-center w-72 ${
				searchResult ? 'h-36' : 'h-20'
			}`}
		>
			<div className="flex flex-row justify-center items-center space-x-1">
				<div className="text-xl">C</div>
				<ClusterComboBox />
				<div className="text-xl">R</div>
				<RowComboBox />
				<div className="text-xl">S</div>
				<RowComboBox />
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
							setIsStarred(true);
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
