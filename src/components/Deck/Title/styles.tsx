import styled from 'styled-components';

export const TitleContainer = styled.div`
	background: var(--title-background);
	padding: 1.5rem 1rem;
	border-radius: 0.5rem;
	width: 100%;
	min-width: 350px;
`;

export const TitleText = styled.h1`
	font-size: var(--header-3);
	margin: 0.2rem;
	text-align: center;
	font-family: var(--font-bold);
	background-image: linear-gradient(
		to right,
		var(--darkTurquoise),
		var(--darkTurquoise-shade-20)
	);
	background-size: 100%;
	background-repeat: repeat;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	-moz-background-clip: text;
	-moz-text-fill-color: transparent;
`;

export const SubText = styled.p`
	font-size: var(--base);
	margin: 0.2rem;
	text-align: center;
`;
