import { createSlice } from '@reduxjs/toolkit';
import StarredData from '../interfaces/StarredData';

const initialState = {
	starredInfo: [] as StarredData[],
};

const starredReducer = createSlice({
	name: 'starred',
	initialState,
	reducers: {
		setStarred: (state, action) => {
			// eslint-disable-next-line no-param-reassign
			state.starredInfo = action.payload;
		},
		addStarred: (state, action) => {
			// eslint-disable-next-line no-param-reassign
			state.starredInfo = [...state.starredInfo, action.payload];
		},
	},
});

export const { setStarred, addStarred } = starredReducer.actions;
export default starredReducer.reducer;
