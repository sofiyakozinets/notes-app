import api from "../api";
import {
	CREATE_NOTE_ERROR,
	CREATE_NOTE_PENDING,
	CREATE_NOTE_SUCCESS,
	DELETE_NOTE,
	LOAD_NOTES_ERROR,
	LOAD_NOTES_PENDING,
	LOAD_NOTES_SUCCESS
} from "../constants/actionTypes";

const initialState = {
	error: null,
	notes: [],
	pending: false
};

const notes = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_NOTES_PENDING:
			return { ...state, pending: true };
		case LOAD_NOTES_SUCCESS:
			return { ...state, pending: false, notes: action.notes };
		case LOAD_NOTES_ERROR:
			return { ...state, pending: false, error: action.error };

		case CREATE_NOTE_PENDING:
			return { ...state, pending: true };
		case CREATE_NOTE_SUCCESS:
			return { ...state, pending: false, notes: [...state.notes, action.note] };
		case CREATE_NOTE_ERROR:
			return { ...state, pending: false, error: action.error };

		case DELETE_NOTE:
			api
				.deleteNote(action.payload)
				.then(response => console.log("delete", response));

			return state.filter(note => note.id !== action.payload.id);

		default:
			return state;
	}
};

export default notes;
