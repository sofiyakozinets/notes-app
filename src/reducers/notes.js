import api from "../api";
import { CREATE_NOTE, DELETE_NOTE, LOAD_NOTES } from "../constants/actionTypes";

const initialState = [];

const notes = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_NOTES:
			const notes = api.loadNotes();

			return notes;

		case CREATE_NOTE:
			api.createNote(action.payload);

			const { color, text, title } = action.payload;

			return [...state, { title, text, color, createdAt: new Date() }];

		case DELETE_NOTE:
			api.deleteNote(action.payload.id);

			return state.filter(note => note.id !== action.payload.id);

		default:
			return state;
	}
};

export default notes;
