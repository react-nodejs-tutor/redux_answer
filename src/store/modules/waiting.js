import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'waiting/CHANGE_INPUT';
const CREATE = 'waiting/CREATE';
const ENTER = 'waiting/ENTER';
const LEAVE = 'waiting/LEAVE';

let id = 3;
export const changeInput = createAction(CHANGE_INPUT, text => text);
export const create = createAction(CREATE, name => ({ name, id: id++ }));
export const enter = createAction(ENTER, id => id);
export const leave = createAction(LEAVE, id => id);

const initialState = {
	input: '',
	list: [
		{
			id: 0,
			name: '손님1',
			entered: false
		},
		{
			id: 1,
			name: '손님0',
			entered: false
		},
		{
			id: 2,
			name: '손님2',
			entered: false
		}
	]
};

// reducer
export default handleActions(
	{
		[CHANGE_INPUT]: (state, action) => ({
			...state,
			input: action.payload
		}),
		[CREATE]: (state, action) => ({
			...state,
			list: state.list.concat({
				...action.payload,
				entered: false
			})
		}),
		[ENTER]: (state, action) => ({
			...state,
			list: state.list.map(item => {
				if (item.id === action.payload) {
					return {
						...item,
						entered: !item.entered
					};
				}
				return item;
			})
		}),
		[LEAVE]: (state, action) => ({
			...state,
			list: state.list.filter(item => item.id !== action.payload)
		})
	},
	initialState
);
