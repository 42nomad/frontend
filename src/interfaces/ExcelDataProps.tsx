import ExcelData from './ExcelData';
import OptionProps from './OptionProps';

interface ExcelDataProps {
	currentTab: number;
	cluster: OptionProps;
	startDate: Date;
	endDate: Date;
	sortingOption: number;
	setExcelData: React.Dispatch<React.SetStateAction<ExcelData[]>>;
}

export default ExcelDataProps;
