import { connect } from "react-redux";

import {
	createNoteRequest,
	deleteNote,
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
	deleteNote: note => dispatch(deleteNote(note))
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
