const seatBackground = (isAvailable: boolean, elapsedTime: number) => {
	if (isAvailable === false) return 'bg-zinc-200';
	if (elapsedTime !== -1) return 'bg-zinc-100';
	return 'bg-white';
};

export default seatBackground;
