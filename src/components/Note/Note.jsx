import React from "react";
import { func, string } from "prop-types";

import * as S from "./styled";

const Note = ({ children, color, onDelete, title }) => (
	<S.Note color={color} data-masonry="note">
		<S.Icon onClick={onDelete}> × </S.Icon>
		{title ? <S.Title>{title}</S.Title> : null}
		<div>{children}</div>
	</S.Note>
);

Note.propTypes = {
	children: string,
	color: string,
	onDelete: func.isRequired,
	title: string
};

Note.defaultProps = {
	children: "",
	color: "yellow",
	title: ""
};

export default Note;
