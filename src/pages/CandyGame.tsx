import React, { useEffect, useState } from 'react';

// Imported components
import Title from '../components/Title';
import Button from '../components/Buttons/Button';
import Card from '../components/Card';

// Other Imports
import DataService from '../DataService';

// Component
const CandyGame: React.FC = () => {
	// State
	const [deckID, setDeckID] = useState('');
	const [cardsLeftInDeck, setCardsLeftInDeck] = useState(0);

	useEffect(() => {
		// Async IIFE to get data
		(async () => {
			// Get query response
			const data = await DataService.getNewDeck();
			// set state
			setDeckID(data.deck_id);
			setCardsLeftInDeck(data.remaining);
		})().catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<Title
				title="52 Card Deck"
				subTitle="Get a new deck of cards, and pull from the deck one card at a time."
			/>
			<div>
				<Button text="New Deck" />
				<Button text="New Card" />
			</div>
			<div>
				<div>
					<p>Cards Remaining: {cardsLeftInDeck}</p>
				</div>
				<Card placeHolder="No Card Yet." />
			</div>
		</main>
	);
};

export default CandyGame;
