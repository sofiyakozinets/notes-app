import {
	CREATE_NOTE_ERROR,
	CREATE_NOTE_PENDING,
	CREATE_NOTE_SUCCESS,
	DELETE_NOTE_ERROR,
	DELETE_NOTE_PENDING,
	DELETE_NOTE_SUCCESS,
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

		case DELETE_NOTE_PENDING:
			return { ...state, pending: true };
		case DELETE_NOTE_SUCCESS:
			const notes = state.notes.filter(note => note.id !== action.noteId);
			return { ...state, pending: false, notes };
		case DELETE_NOTE_ERROR:
			return { ...state, pending: false, error: action.error };

		default:
			return state;
	}
};

export default notes;
