import React from 'react';
import SelectedProps from './OptionProps';

interface ComboBoxProps {
	inputTextSize: string;
	options: SelectedProps[];
	selectedOne: SelectedProps;
	setSelected: React.Dispatch<React.SetStateAction<SelectedProps>>;
}

export default ComboBoxProps;
