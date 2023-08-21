import React from 'react';

function SearchSeat() {
	return (
		<div className="grid border-4 border-nomad-green">
			<div className="grid grid-cols-7">
				<div>C</div>
				<input></input>
				<div>R</div>
				<input></input>
				<div>S</div>
				<input></input>
				<button type="button">검색</button>
			</div>
			{/* <SearchResult /> */}
			<button type="button">즐겨찾기 추가</button>
		</div>
	);
}

export default SearchSeat;
