import OptionProps from './OptionProps';

interface StatProps {
	startDate: Date;
	endDate: Date;
	sortingOption: number;
	cluster?: OptionProps;
	clusters?: OptionProps[];
	setCluster?: React.Dispatch<React.SetStateAction<OptionProps>>;
	setStartDate: React.Dispatch<React.SetStateAction<Date>>;
	setEndDate: React.Dispatch<React.SetStateAction<Date>>;
	setSortingOption: React.Dispatch<React.SetStateAction<number>>;
}

export default StatProps;
