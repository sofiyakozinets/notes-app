import React from "react";
import { array, func } from "prop-types";

import NoteEditor from "../NoteEditor";
import NotesGrid from "../NotesGrid";
import * as S from "./styled";

const NotesApp = ({ createNote, deleteNote, loadNotes, notes }) => {
	loadNotes();

	const handleCreateNote = noteData => {
		createNote(noteData);
	};

	const handleDeleteNote = note => {
		deleteNote(note.id);
	};

	return (
		<S.Container>
			<S.Header>NotesApp</S.Header>
			<NoteEditor onCreateNote={handleCreateNote} />
			<NotesGrid notes={notes} onDeleteNote={handleDeleteNote} />
		</S.Container>
	);
};

NotesApp.propTypes = {
	createNote: func.isRequired,
	deleteNote: func.isRequired,
	loadNotes: func.isRequired,
	notes: array
};

NotesApp.defaultProps = {
	notes: []
};

export default NotesApp;
