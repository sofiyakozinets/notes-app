import db from "../db";

export const loadNotes = () => {
	return db.notes.toArray();
};

export const createNote = data => {
	const { color, text, title } = data;

	return db.notes.add({ title, text, color, createdAt: new Date() });
};

export const deleteNote = id => {
	return db.notes.delete(id);
};

export const updateNote = (id, data) => {
	return db.notes.update(id, data);
};
