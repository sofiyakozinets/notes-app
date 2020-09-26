import React, { useState } from "react";
import { func } from "prop-types";

import ColorPicker from "../ColorPicker";
import * as S from "./styled";

const NoteEditor = ({ onCreateNote }) => {
	const [note, setNote] = useState({
		title: "",
		text: "",
		color: "#FFFFFF"
	});

	const handleTextChange = event => {
		setNote({ ...note, text: event.target.value });
	};

	const handleTitleChange = event => {
		setNote({ ...note, title: event.target.value });
	};

	const handleColorChange = color => {
		setNote({ ...note, color });
	};

	const handleNoteAdd = () => {
		onCreateNote(note);
		setNote({ text: "", title: "", color: "#FFFFFF" });
	};

	return (
		<S.Editor>
			<S.Input
				onChange={handleTitleChange}
				placeholder="Enter title"
				type="text"
				value={note.title}
			/>
			<S.Textarea
				onChange={handleTextChange}
				placeholder="Enter note text"
				rows={5}
				value={note.text}
			/>
			<S.Footer>
				<ColorPicker onChange={handleColorChange} value={note.color} />
				<S.Button disabled={!note.text} onClick={handleNoteAdd}>
					Add
				</S.Button>
			</S.Footer>
		</S.Editor>
	);
};

NoteEditor.propTypes = {
	onCreateNote: func.isRequired
};

export default NoteEditor;
