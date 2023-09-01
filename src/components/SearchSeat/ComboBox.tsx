import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';

interface SelectedProp {
	id: number;
	name: string;
}

interface ComboBoxProps {
	inputTextSize: string;
	options: SelectedProp[];
	selectedOne: SelectedProp;
	setSelected: React.Dispatch<React.SetStateAction<SelectedProp>>;
}

function ComboBox({ inputTextSize, options, selectedOne, setSelected }: ComboBoxProps) {
	const [query, setQuery] = useState('');

	const filtered =
		query === ''
			? options
			: options.filter((option) =>
					option.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')),
			  );

	return (
		<div className="w-[3.2rem]">
			<Combobox value={selectedOne} onChange={setSelected}>
				<div className="relative">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left">
						<Combobox.Input
							id="combobox-input"
							className={`w-full border-none py-2 pl-2 pr-2 leading-5 text-black focus:outline-none ${inputTextSize}`}
							displayValue={(option: SelectedProp) => option.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center">
							<ChevronUpDownIcon className="w-5 h-5" />
						</Combobox.Button>
					</div>

					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white">
						{filtered.length === 0 && query !== '' ? (
							<div className="relative select-none font-nexonLight text-xs text-gray-700">검색 불가</div>
						) : (
							filtered.map((option) => (
								<Combobox.Option
									key={option.id}
									className={({ active }) =>
										`relative select-none py-2 flex justify-center items-center ${
											active ? 'bg-nomad-green text-white' : 'text-gray-900'
										}`
									}
									value={option}
								>
									{({ selected }) => <span className={` ${selected ? '' : 'font-nexonLight'}`}>{option.name}</span>}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
}

export default ComboBox;
