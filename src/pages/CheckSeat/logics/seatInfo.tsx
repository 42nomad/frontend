const seatInfo = (isAvailable: boolean, cadet: string | null, elapsedTime: number) => {
	if (isAvailable === false) return `${cadet}님 사용중`;
	if (elapsedTime !== -1) return `${elapsedTime}분 전 로그아웃`;
	return '사용 가능';
};

export default seatInfo;
