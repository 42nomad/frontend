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
			state.starredInfo = action.payload;
		},
		addStarred: (state, action) => {
			state.starredInfo = [...state.starredInfo, action.payload];
		},
		updateStarred: (state, action) => {
			state.starredInfo = state.starredInfo.map((starred) => {
				if (starred.starredId === action.payload.starredId) {
					return action.payload;
				}
				return starred;
			});
		},
	},
});

export const { setStarred, addStarred, updateStarred } = starredReducer.actions;
export default starredReducer.reducer;
