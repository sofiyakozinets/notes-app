import db from "../db";

export const loadNotes = () => {
	return db.allDocs({ include_docs: true, descending: true });
};

export const createNote = note => {
	return db.post(note);
};

export const deleteNote = noteId => {
	return db.get(noteId).then(doc => db.remove(doc));
};
