import { connect } from "react-redux";

import {
	createNoteRequest,
	deleteNoteRequest,
	loadNotesRequest
} from "../actions/notes";
import NotesApp from "../components/NotesApp";

const mapStateToProps = ({ notes: state }) => ({
	error: state.error,
	notes: state.notes,
	pending: state.pending
});

const mapDispatchToProps = dispatch => ({
	loadNotes: () => dispatch(loadNotesRequest()),
	createNote: note => dispatch(createNoteRequest(note)),
	deleteNote: noteId => dispatch(deleteNoteRequest(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
