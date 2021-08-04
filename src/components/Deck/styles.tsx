import styled from 'styled-components';

export const DeckContainer = styled.main`
	width: 100vw;
	height: 100vh;
	background-color: var(--background);
	color: var(--white);
	padding: 1rem;
	display: grid;
	gap: 0.5rem;
	justify-content: center;
	align-items: start;
	grid-template-rows: 1fr 0fr 3fr 1fr;
	grid-template-columns: 1fr;
`;

export const DeckInfo = styled.section`
	grid-row: 1 / span 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const DeckActions = styled.div`
	padding: 0.8rem;
	width: 100%;
	min-width: 250px;
	max-width: 320px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const DeckState = styled.section`
	grid-row: 2 / span 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const CurrentCardContainer = styled.section`
	grid-row: 3 / span 1;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PrevCardsContainer = styled.table`
	grid-row: 4 / span 1;
	width: 100%;
	height: 100%;
	overflow-y: scroll;
	text-align: center;
	background-color: var(--table-background);
	display: block;
	table-layout: fixed;

	& thead,
	& tbody tr {
		display: table;
		table-layout: fixed;
	}

	& thead {
		background-color: var(--table-background);
		width: 100%;
		position: sticky;
		top: 0;
	}

	& tbody {
		display: block;
		overflow-y: scroll;
		text-align: center;

		& tr:nth-child(odd) {
			background-color: var(--table-row-background);
		}
	}

	& tr {
		height: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
