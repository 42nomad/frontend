import React from 'react';

interface SeatButtonProps {
	buttonName: string;
	tab: number;
	setTab: React.Dispatch<React.SetStateAction<number>>;
	tabNumber: number;
}

function SeatButton({ buttonName, tab, tabNumber, setTab }: SeatButtonProps) {
	return (
		<button
			type="button"
			onClick={() => {
				setTab(tabNumber);
			}}
			className={`border-collapse rounded-2xl w-20 h-8 text-md shadow-full shadow-zinc-900/10
				${tab === tabNumber ? 'bg-nomad-green text-nomad-sand' : 'bg-white text-gray-700 font-nexonLight'}`}
		>
			{buttonName}
		</button>
	);
}

export default SeatButton;
