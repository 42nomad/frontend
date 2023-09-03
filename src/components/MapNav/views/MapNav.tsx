import React from 'react';
import MapNavProps from '../../../interfaces/MapNavProps';
import arrow from '../../../styles/arrow';
import leftButtonClick from '../logics/leftButtonClick';
import rightButtonClick from '../logics/rightButtonClick';

function MapNav({ mapName, idx, setIdx, maxIdx }: MapNavProps) {
	return (
		<div className="w-[80%] flex justify-between items-center my-3">
			<button
				type="button"
				aria-label="left-button"
				css={arrow}
				className='bg-[url("../assets/images/ArrowLeft.svg")]'
				onClick={() => leftButtonClick(idx, setIdx, maxIdx)}
			/>
			<span className="font-nexonBold text-2xl">{mapName}</span>
			<button
				type="button"
				aria-label="right-button"
				css={arrow}
				className='bg-[url("../assets/images/ArrowRight.svg")]'
				onClick={() => rightButtonClick(idx, setIdx, maxIdx)}
			/>
		</div>
	);
}

export default MapNav;
