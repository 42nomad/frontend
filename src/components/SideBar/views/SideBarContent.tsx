import React from 'react';
import { XMarkIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Menu from './Menu';

interface SideBarProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBarContent({ setIsOpen }: SideBarProps) {
	/*
    const side = useRef<HTMLDivElement>(null);

	sidebar 외부의 부분을 클릭시 사이드바를 닫아주는 부분.
	근데 지금은 햄버거 버튼 클릭시 사이드바를 닫고 안열어줌.
	정상작동이 안되서 일단 주석처리함.
	const handleClickOutside = (e: any) => {
		if (isOpen && side.current && !side.current.contains(e.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	});
    */
	// const [isSeat, setIsSeat] = React.useState<boolean>(true);

	return (
		<nav id="SideBar-Content" className="z-50 bg-nomad-green min-h-screen h-full w-80 fixed">
			<div className="flex flex-col">
				<XMarkIcon
					className="z-50 mt-2 mr-4 self-end transition-transform transform hover:scale-110 w-10 h-10 stroke-nomad-sand cursor-pointer"
					onClick={() => {
						setIsOpen(false);
					}}
				/>
				<ul className="z-50 w-full pr-7 ">
					<Menu link="/checkSeat" name="⭐️ 자리 확인" />
					<Menu link="/meetingRoom" name="👨‍👩‍👧‍👦 회의실" />
					<Menu link="/cluster" name="🖥️ 클러스터 맵" />
					<Menu link="/lost" name="📌 분실 게시판" />
					<Menu link="/myPage" name="🏠 마이페이지" />
				</ul>
				<ul className="z-50 w-full pr-7">
					{/* <Menu link="/quickSearch" name="빠른 자리 검색" /> */}
					<li className="z-50 w-full h-14 flex items-center justify-end text-nomad-sand text-xl transition-transform transform hover:scale-105">
						빠른 자리 검색
						{/* <SearchSeat /> */}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default SideBarContent;
