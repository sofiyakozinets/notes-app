import React, { useEffect } from "react";
import { array, bool, func, string } from "prop-types";

import NoteEditor from "../NoteEditor";
import NotesGrid from "../NotesGrid";
import * as S from "./styled";

const NotesApp = ({
	createNote,
	deleteNote,
	error,
	loadNotes,
	notes,
	pending
}) => {
	useEffect(() => {
		loadNotes();
	}, []);

	const showNotes = !pending && !error;

	const handleCreateNote = note => {
		createNote(note);
	};

	const handleDeleteNote = note => {
		deleteNote(note);
	};

	return (
		<S.Container>
			<S.Header>NotesApp</S.Header>
			<NoteEditor onCreateNote={handleCreateNote} />
			{pending && <div>Loading...</div>}
			{error && <div>Sorry, there was an error. {error}</div>}
			{showNotes && <NotesGrid notes={notes} onDeleteNote={handleDeleteNote} />}
		</S.Container>
	);
};

NotesApp.propTypes = {
	createNote: func.isRequired,
	deleteNote: func.isRequired,
	error: string,
	loadNotes: func.isRequired,
	notes: array,
	pending: bool
};

NotesApp.defaultProps = {
	error: null,
	notes: [],
	pending: false
};

export default NotesApp;
