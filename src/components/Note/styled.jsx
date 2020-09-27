import styled from "styled-components";

export const Icon = styled.span`
	color: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	display: none;
	position: absolute;
	right: 5px;
	top: 5px;
`;

export const Note = styled.div`
	background-color: ${props => props.color};
	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	float: left;
	height: auto;
	margin-bottom: 10px;
	padding: 10px;
	position: relative;
	transition: box-shadow 0.3s;
	white-space: pre-wrap;
	width: 250px;
	word-wrap: break-word;

	&:hover {
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

		${Icon} {
			display: block;
		}
	}
`;

export const Title = styled.h4`
	margin: 0;
	margin-bottom: 5px;
`;
