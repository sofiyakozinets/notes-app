import styled from "styled-components";

export const Editor = styled.div`
	background-color: white;
	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	display: flex;
	flex-direction: column;
	margin: 16px auto;
	max-width: 600px;
	padding: 16px;
	width: 100%;
`;

export const Textarea = styled.textarea`
	border: none;
	font-size: 14px;
	font-weight: 300;
	margin: 5px;
	resize: none;
	width: 100%;

	&:focus {
		outline: 0;
	}
`;

export const Input = styled.input`
	border: none;
	font-size: 14px;
	font-weight: 500;
	margin: 5px;
	resize: none;
	width: 100%;

	&:focus {
		outline: 0;
	}
`;

export const Footer = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;
`;

export const Button = styled.button`
	align-items: center;
	background: #3ac569;
	border: 0 none;
	border-radius: 24px;
	color: #fff;
	color: white;
	cursor: pointer;
	display: flex;
	flex: 0 0 160px;
	font-size: 15px;
	font-weight: 500;
	justify-content: center;
	line-height: 1.3;
	margin: 10px;
	padding: 10px 15px;
	text-align: center;
	text-transform: uppercase;
	transition: all 100ms ease-in-out;

	&:hover {
		opacity: 0.9;
		transition: all 100ms ease;
	}

	&:active {
		opacity: 0.75;
		transform: scale(0.97);
		transition: all 100ms ease;
	}

	&:focus {
		outline: 0;
	}
`;
