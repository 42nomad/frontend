import React from 'react';

interface SeatButtonProps {
	buttonName: string;
	currentTab: number;
	setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
	tabNumber: number;
}

function SeatButton({ buttonName, currentTab, tabNumber, setCurrentTab }: SeatButtonProps) {
	return (
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

export default SeatButton;
