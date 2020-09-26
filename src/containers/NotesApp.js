import { connect } from "react-redux";

import { createNote, deleteNote, loadNotes } from "../actions/notes";
import NotesApp from "../components/NotesApp";

const mapStateToProps = state => ({
	notes: state.notes
});

const mapDispatchToProps = dispatch => ({
	loadNotes: () => dispatch(loadNotes()),
	createNote: () => dispatch(createNote()),
	deleteNote: () => dispatch(deleteNote())
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesApp);
