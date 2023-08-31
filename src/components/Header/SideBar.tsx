import React, { useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Menu from './Menu';

interface SideBarProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBar({ setIsOpen }: SideBarProps) {
	const side = useRef<HTMLDivElement>(null);

	// sidebar 외부의 부분을 클릭시 사이드바를 닫아주는 부분.
	// 근데 지금은 햄버거 버튼 클릭시 사이드바를 닫고 안열어줌.
	// 정상작동이 안되서 일단 주석처리함.
	// const handleClickOutside = (e: any) => {
	// 	if (side.current && !side.current.contains(e.target)) {
	// 		setIsOpen(false);
	// 	}
	// };

	// useEffect(() => {
	// 	window.addEventListener('click', handleClickOutside);
	// 	return () => {
	// 		window.removeEventListener('click', handleClickOutside);
	// 	};
	// });

	// const [isSeat, setIsSeat] = React.useState<boolean>(true);

	return (
		<div className="fixed h-full w-full max-w-max-wid backdrop-blur-sm z-50 top-0">
			<div className="flex h-full justify-end">
				<nav id="SideBar" ref={side} className="z-50 bg-nomad-green h-full w-72">
					<div className="flex flex-col">
						<XMarkIcon
							className="z-50 mt-2 mr-4 self-end transition-transform transform hover:scale-110 w-10 h-10 stroke-nomad-sand cursor-pointer"
							onClick={() => {
								setIsOpen(false);
							}}
						/>
						<ul className="z-50 mx-2 mt-3">
							<Menu link="/seat" name="자리 확인" />
							<Menu link="/meeting" name="회의실" />
							<Menu link="/cluster" name="클러스터 맵" />
							<Menu link="/lost" name="분실 게시판" />
							<Menu link="/myPage" name="마이페이지" />
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default SideBar;
