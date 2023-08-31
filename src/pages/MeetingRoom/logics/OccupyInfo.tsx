const OccupyInfo = (usageTime: number) => {
	const useHour = Math.floor(usageTime / 60);
	const useMin = usageTime % 60;
	if (useMin === 0) return `${useHour}시간`;
	if (useHour === 0) return `${useMin}분`;
	return `${useHour}시간 ${useMin}분`;
};

export default OccupyInfo;
