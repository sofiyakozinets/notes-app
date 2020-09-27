import { CREATE_NOTE, DELETE_NOTE, LOAD_NOTES } from "../constants/actionTypes";

export const loadNotes = () => ({ type: LOAD_NOTES });
export const createNote = note => ({ type: CREATE_NOTE, payload: note });
export const deleteNote = note => ({ type: DELETE_NOTE, payload: note });
