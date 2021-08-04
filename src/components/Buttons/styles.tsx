import styled from 'styled-components';

const SharedButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	padding: 0.75rem 2rem;
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	background-size: 200% auto;
	color: var(--text);
	font-family: var(--font-bold);
	&:hover {
		background-position: right center;
	}
`;

export const NewDeckButtonContainer = styled(SharedButton)`
	background-image: linear-gradient(
		to right,
		var(--redSalsa) 0%,
		var(--redSalsa-shade-20) 51%,
		var(--redSalsa-shade-10) 100%
	);
`;

export const NewCardButtonContainer = styled(SharedButton)`
	background-image: linear-gradient(
		to right,
		var(--darkTurquoise) 0%,
		var(--darkTurquoise-shade-20) 51%,
		var(--darkTurquoise-shade-10) 100%
	);
`;
