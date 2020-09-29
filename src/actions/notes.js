import api from "../api";
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

export const createNotePending = () => ({ type: CREATE_NOTE_PENDING });
export const createNoteSuccess = note => ({ type: CREATE_NOTE_SUCCESS, note });
export const createNoteError = error => ({ type: CREATE_NOTE_ERROR, error });
export const createNoteRequest = note => {
	note = {
		...note,
		createdAt: new Date()
	};
	return dispatch => {
		dispatch(createNotePending());
		api
			.createNote(note)
			.then(response => {
				note = {
					...note,
					id: response.data.id,
					_id: response.data.id,
					_rev: response.data.rev
				};
				dispatch(createNoteSuccess(note));
			})
			.catch(error => {
				dispatch(createNoteError(error));
			});
	};
};

export const deleteNotePending = () => ({ type: DELETE_NOTE_PENDING });
export const deleteNoteSuccess = noteId => ({
	type: DELETE_NOTE_SUCCESS,
	noteId
});
export const deleteNoteError = error => ({ type: DELETE_NOTE_ERROR, error });
export const deleteNoteRequest = noteId => {
	return dispatch => {
		dispatch(deleteNotePending());
		api
			.deleteNote(noteId)
			.then(() => {
				dispatch(deleteNoteSuccess(noteId));
			})
			.catch(error => {
				dispatch(deleteNoteError(error));
			});
	};
};
