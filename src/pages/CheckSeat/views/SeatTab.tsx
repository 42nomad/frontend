import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import SeatTabProps from '../../../interfaces/SeatTabProp';

function SeatTab({ buttonName, currentTab, tabNumber, setCurrentTab }: SeatTabProps) {
	return buttonName === '자리검색' ? (
		<div
			className={`flex border-collapse rounded-2xl w-8 h-8 shadow-full shadow-zinc-900/10 items-center justify-center ${
				currentTab === tabNumber ? 'bg-nomad-green' : 'bg-white'
			}`}
		>
			<MagnifyingGlassIcon
				className={`w-6 h-6 ${currentTab === tabNumber ? 'text-nomad-sand' : 'stroke-1 text-gray-700'}`}
				onClick={() => {
					setCurrentTab(tabNumber);
				}}
			/>
		</div>
	) : (
		<button
			type="button"
			onClick={() => {
				setCurrentTab(tabNumber);
			}}
			className={`border-collapse rounded-2xl w-20 h-8 text-md shadow-full shadow-zinc-900/10
				${currentTab === tabNumber ? 'bg-nomad-green text-nomad-sand' : 'bg-white text-gray-700 font-nexonLight'}`}
		>
			{buttonName}
		</button>
	);
}

export default SeatTab;
