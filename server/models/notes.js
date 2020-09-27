import db from "../db";

export const loadNotes = () => {
	return db.allDocs({ include_docs: true, descending: true });
};

export const createNote = note => {
	return db.post({
		id: new Date().toISOString(),
		createdAt: new Date(),
		...note
	});
};

export const deleteNote = note => {
	return db.remove(note);
};
