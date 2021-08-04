import styled from 'styled-components';

const SharedButton = styled.button`
	border-radius: 0.5rem;
	border: none;
	padding: 0.75rem 2rem;
`;

export const NewDeckButtonContainer = styled(SharedButton)`
	&:hover {
		background-color: var(--newDeckButton-background);
	}
`;

export const NewCardButtonContainer = styled(SharedButton)`
	&:hover {
		background-color: var(--newCardButton-background);
	}
`;
