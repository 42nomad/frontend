const leftButtonClick = (idx: number, setIdx: React.Dispatch<React.SetStateAction<number>>, maxIdx: number) => {
	if (idx === 0) setIdx(maxIdx);
	else setIdx(idx - 1);
};

export default leftButtonClick;
