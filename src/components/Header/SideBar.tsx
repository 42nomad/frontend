import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Menu from './Menu';

interface SideBarProps {
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBar({ setIsOpen }: SideBarProps) {
	return (
		<div className="fixed h-full w-full max-w-max-wid backdrop-blur-sm z-50 top-0">
			<div
				className="flex h-full justify-end"
				aria-hidden="true"
				onClick={(e) => {
					if (e.target !== e.currentTarget) return;
					setIsOpen(false);
				}}
			>
				<nav id="SideBar" className="z-50 bg-nomad-green h-full w-72">
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
