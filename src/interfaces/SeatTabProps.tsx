interface SeatTabProps {
	buttonName: string;
	currentTab: number;
	setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
	tabNumber: number;
}

export default SeatTabProps;
