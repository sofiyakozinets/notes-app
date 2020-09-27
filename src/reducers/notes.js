import api from "../api";
import { CREATE_NOTE, DELETE_NOTE, LOAD_NOTES } from "../constants/actionTypes";

const initialState = [];

const notes = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_NOTES:
			let notes = [];
			api.loadNotes().then(response => response.data.rows);

			return notes;

		case CREATE_NOTE:
			api.createNote(action.payload);

			return [
				...state,
				{
					id: new Date().toISOString(),
					createdAt: new Date(),
					...action.payload
				}
			];

		case DELETE_NOTE:
			api.deleteNote(action.payload);

			return state.filter(note => note.id !== action.payload.id);

		default:
			return state;
	}
};

export default notes;
