import React from 'react';

interface SeatButtonProps {
	buttonName: string;
	isStar: boolean;
	setIsStar: React.Dispatch<React.SetStateAction<boolean>>;
	star: boolean;
}

function SeatButton({ buttonName, isStar, star, setIsStar }: SeatButtonProps) {
	return (
		<button
			type="button"
			onClick={() => {
				setIsStar(star);
			}}
			className={`border-collapse rounded-xl w-20 h-15 text-md 
				${isStar === star ? 'bg-nomad-green text-nomad-sand' : 'bg-nomad-disable bg-opacity-50 text-gray-700 font-nexonLight'}`}
		>
			{buttonName}
		</button>
	);
}

export default SeatButton;
