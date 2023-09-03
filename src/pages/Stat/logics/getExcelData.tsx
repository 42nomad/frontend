import { AxiosError } from 'axios';
import getStatClusterAll from '../../../services/getStatClusterAll';
import swalAlert from '../../../utils/swalAlert';
import getStatMeeting from '../../../services/getStatMeeting';
import getStatCluster from '../../../services/getStatCluster';
import ExcelDataProps from '../../../interfaces/ExcelDataProps';

const getExcelData = async ({
	currentTab,
	cluster,
	startDate,
	endDate,
	sortingOption,
	setExcelData,
}: ExcelDataProps) => {
	let res;
	try {
		if (currentTab === 1) {
			if (cluster.id === 0) res = await getStatClusterAll(startDate, endDate, sortingOption);
			else res = await getStatCluster(startDate, endDate, `c${cluster.name}`, sortingOption);
		} else res = await getStatMeeting(startDate, endDate, sortingOption);
		setExcelData(res.data);
		if (res.data.length === 0) swalAlert('해당 기간 내에 출력할 통계정보가 없습니다.');
	} catch (err) {
		const { response } = err as AxiosError;
		if (response && response.status === 500) swalAlert('변환할 수 없는 날짜입니다. 정보를 다시 입력해주세요.');
	}
};

export default getExcelData;
