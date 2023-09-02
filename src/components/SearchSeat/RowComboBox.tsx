import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/24/outline';

interface RowProp {
	id: number;
	name: string;
}

const rows = [
	{ id: 1, name: '1' },
	{ id: 2, name: '2' },
	{ id: 3, name: '3' },
	{ id: 4, name: '4' },
	{ id: 5, name: '5' },
	{ id: 6, name: '6' },
	{ id: 7, name: '7' },
	{ id: 8, name: '8' },
	{ id: 9, name: '9' },
	{ id: 10, name: '10' },
	{ id: 11, name: '11' },
];

interface RowComboBoxProps {
	selectedRow: RowProp;
	setSelectedRow: React.Dispatch<React.SetStateAction<RowProp>>;
}

function RowComboBox({ selectedRow, setSelectedRow }: RowComboBoxProps) {
	const [query, setQuery] = useState('');

	const filteredrow =
		query === ''
			? rows
			: rows.filter((row) =>
					row.name.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')),
			  );

	return (
		<div className="w-12">
			<Combobox value={selectedRow} onChange={setSelectedRow}>
				<div className="relative">
					<div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left">
						<Combobox.Input
							className="w-full border-none py-2 pl-2 pr-2 text-xl leading-5 text-black focus:outline-none"
							displayValue={(row: RowProp) => row.name}
							onChange={(event) => setQuery(event.target.value)}
						/>
						<Combobox.Button className="absolute inset-y-0 right-0 flex items-center">
							<ChevronUpDownIcon className="w-5 h-5" />
						</Combobox.Button>
					</div>

					<Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white">
						{filteredrow.length === 0 && query !== '' ? (
							<div className="relative select-none font-nexonLight text-xs text-gray-700">검색 불가</div>
						) : (
							filteredrow.map((row) => (
								<Combobox.Option
									key={row.id}
									className={({ active }) =>
										`relative select-none py-2 pl-4 pr-3 ${active ? 'bg-nomad-green text-white' : 'text-gray-900'}`
									}
									value={row}
								>
									{({ selected }) => <span className={` ${selected ? '' : 'font-nexonLight'}`}>{row.name}</span>}
								</Combobox.Option>
							))
						)}
					</Combobox.Options>
				</div>
			</Combobox>
		</div>
	);
}

export default RowComboBox;