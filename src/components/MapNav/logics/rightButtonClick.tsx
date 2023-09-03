const rightButtonClick = (idx: number, setIdx: React.Dispatch<React.SetStateAction<number>>, maxIdx: number) => {
	if (idx === maxIdx) setIdx(0);
	else setIdx(idx + 1);
};

export default rightButtonClick;
