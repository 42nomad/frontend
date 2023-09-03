import MyPageStarredData from "./MyPageStarredData";

interface MyPageStarredProps {
	setModal: React.Dispatch<React.SetStateAction<boolean>>,
	starredData: MyPageStarredData[]
}

export default MyPageStarredProps;