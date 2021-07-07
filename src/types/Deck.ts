/* eslint-disable camelcase */

// This is the main interface for querying a Deck of cards
export default interface Deck {
	deck_id: string;
	remaining: number; // cards left in deck
	shuffled: boolean;
	success: boolean;
}
