import SearchSeatData from './SearchSeatData';

interface SearchButtonProps {
	location: string;
	setInfo: React.Dispatch<React.SetStateAction<SearchSeatData | undefined>>;
	setIsStarred: React.Dispatch<React.SetStateAction<boolean>>;
}

export default SearchButtonProps;
