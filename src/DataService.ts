// Types
import { Deck, CardPayload } from './types';

// Collection of methods to grab decks & cards
const dataService = {
	// Function that grabs a new deck of cards
	getNewDeck: async (): Promise<Deck> => {
		// API URL
		const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';

		// Fetching data async
		try {
			// make api call
			const newDeckID = await fetch(url);
			// get JSON & return it from the function
			return (await newDeckID.json()) as Deck;
		} catch (error) {
			// return an error if one occurs
			throw new Error(error);
		}
	},
	getNewCard: async (deckID: string): Promise<CardPayload> => {
		// API call
		const url = `https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=1
		`;

		// Fetching a new card
		try {
			// query api for a new card from the deck and return the payload
			const newCard = await fetch(url);
			return (await newCard.json()) as CardPayload;
		} catch (error) {
			// return an error if one occurs
			throw new Error(error);
		}
	},
};

export default dataService;
