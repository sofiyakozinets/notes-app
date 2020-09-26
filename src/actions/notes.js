import { CREATE_NOTE, DELETE_NOTE, LOAD_NOTES } from "../constants/actionTypes";

export const loadNotes = () => ({ type: LOAD_NOTES });
export const createNote = data => ({ type: CREATE_NOTE, payload: data });
export const deleteNote = id => ({ type: DELETE_NOTE, payload: id });
