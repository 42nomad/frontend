import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import saveButtonClick from '../logics/saveButtonClick';
import radioOption from '../../../styles/radioOption';

function HomeRadioGroup() {
	const dispatch = useDispatch();
	const [home, setRadioHome] = useState(useSelector((state: RootState) => state.home.home));

	return (
		<div className="text-center overflow-auto mt-2 pt-1 text-sm">
			<RadioGroup value={home} onChange={setRadioHome} className="grid grid-cols-2 gap-y-3">
				<RadioGroup.Option value={0}>
					{({ checked }) => (
						<span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>
							자리 확인
						</span>
					)}
				</RadioGroup.Option>
				<RadioGroup.Option value={1}>
					{({ checked }) => (
						<span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>
							클러스터 맵
						</span>
					)}
				</RadioGroup.Option>
				<RadioGroup.Option value={2}>
					{({ checked }) => (
						<span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>
							회의실 맵
						</span>
					)}
				</RadioGroup.Option>
				<RadioGroup.Option value={3}>
					{({ checked }) => (
						<span css={radioOption} className={checked ? 'bg-nomad-green/30' : ''}>
							분실물 게시판
						</span>
					)}
				</RadioGroup.Option>
			</RadioGroup>
			<button type="button" className="text-center bg-nomad-green text-nomad-sand rounded-xl w-[25%] mt-4 h-6"
				onClick={() => saveButtonClick(home, dispatch)}>
				저장
			</button>
		</div>
	);
}

export default HomeRadioGroup;