import React from "react";
import Masonry from "react-masonry-component";
import { array, func } from "prop-types";

import Note from "../Note";
import * as S from "./styled";

const masonryOptions = {
	itemSelector: "[data-masonry='note']",
	columnWidth: 250,
	gutter: 10,
	fitWidth: true
};

const NotesGrid = ({ notes, onDeleteNote }) =>
	notes.length ? (
		<S.Container>
			<Masonry options={masonryOptions}>
				{notes.map(note => (
					<Note
						key={note.id}
						color={note.color}
						onDelete={() => onDeleteNote(note)}
						title={note.title}
					>
						{note.text}
					</Note>
				))}
			</Masonry>
		</S.Container>
	) : null;

NotesGrid.propTypes = {
	notes: array,
	onDeleteNote: func.isRequired
};

NotesGrid.defaultProps = {
	notes: []
};

export default NotesGrid;
