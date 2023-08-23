import React from 'react';

interface SeatButtonProps {
	buttonName: string;
	isStarred: boolean;
	setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
	starred: boolean;
}

function SeatButton({ buttonName, isStarred, starred, setIsStarred }: SeatButtonProps) {
	return (
		<button
			type="button"
			onClick={() => {
				setIsStarred(starred);
			}}
			className={`border-collapse rounded-2xl w-20 h-8 text-md shadow-full shadow-zinc-900/10
				${isStarred === starred ? 'bg-nomad-green text-nomad-sand' : 'bg-white text-gray-700 font-nexonLight'}`}
		>
			{buttonName}
		</button>
	);
}

export default SeatButton;
