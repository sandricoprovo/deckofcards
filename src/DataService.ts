import Deck from './types/Deck';

// Collection of methods to grab decks & cards
const dataService = {
	// Function that grabs a new deck of cards
	getNewDeck: async (): Promise<Deck> => {
		// API URL
		const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

		// Fetching data async
		try {
			// make api call
			const apiCall = await fetch(url);
			// get JSON & return it from the function
			return (await apiCall.json()) as Deck;
		} catch (error) {
			// return an error if one occurs
			throw new Error(error);
		}
	},
};

export default dataService;
