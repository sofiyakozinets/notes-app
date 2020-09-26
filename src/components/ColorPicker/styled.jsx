import styled from "styled-components";

export const ColorPicker = styled.div`
	display: flex;
`;

export const Swatch = styled.div`
	background-color: ${props => props.color};
	border: 2px solid transparent;
	border-radius: 50%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
	cursor: pointer;
	height: 30px;
	margin: 3px;
	width: 30px;

	&:hover {
		border: 2px solid grey;
	}

	${props => props.selected && `border: 2px solid grey;`}
`;
