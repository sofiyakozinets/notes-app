import api from "../api";
import {
	CREATE_NOTE,
	DELETE_NOTE,
	LOAD_NOTES_ERROR,
	LOAD_NOTES_PENDING,
	LOAD_NOTES_SUCCESS
} from "../constants/actionTypes";

export const loadNotesPending = () => ({ type: LOAD_NOTES_PENDING });
export const loadNotesSuccess = notes => ({
	type: LOAD_NOTES_SUCCESS,
	notes
});
export const loadNotesError = error => ({
	type: LOAD_NOTES_ERROR,
	error
});
export const loadNotesRequest = () => {
	return dispatch => {
		dispatch(loadNotesPending());
		api
			.loadNotes()
			.then(response => {
				console.log("load response", response);
				const notes = response.data.rows.map(item => ({
					...item.doc,
					id: item.doc._id
				}));
				dispatch(loadNotesSuccess(notes));
				return notes;
			})
			.catch(error => {
				dispatch(loadNotesError(error));
			});
	};
};

export const createNote = note => {
	return { type: CREATE_NOTE, payload: note };
};
export const createNoteRequest = note => {
	note = {
		...note,
		id: new Date().toISOString(),
		createdAt: new Date()
	};

	api.createNote(note).then(response => {
		console.log("response create", response);
		const createdNote = response;

		createNote(createdNote);
	});
};

export const deleteNote = note => ({ type: DELETE_NOTE, payload: note });
