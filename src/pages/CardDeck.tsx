import React, { useEffect, useState, useRef } from 'react';

// Imported components
import Title from '../components/CardDeck/Title';
import Button from '../components/Buttons/Button';
import Card from '../components/CardDeck/Card';

// Other Imports
import DataService from '../DataService';

// Types
import { Card as CardType } from '../types';

// Component
const CandyGame: React.FC = () => {
	// State
	const [deckID, setDeckID] = useState<string>('');
	const [remainingCards, setRemainingCards] = useState<number>(0);
	const [currentCard, setCurrentCard] = useState<CardType>({
		suit: 'N/A',
		value: 'N/A',
		image: 'N/A',
		code: 'N/A',
	});
	// TODO: Add a list of all the drawn cards in order (useRef array to prev drawn cards???)
	const drawnCards = useRef<CardType[]>([]);

	useEffect(() => {
		// Async IIFE to get data
		(async () => {
			// Get query response
			const newDeck = await DataService.getNewDeck();
			// set state
			setDeckID(newDeck.deck_id);
			setRemainingCards(newDeck.remaining);
		})().catch((err) => console.log(err));
	}, []);

	return (
		<main>
			<Title
				title="52 Card Deck"
				subTitle="Get a new deck of cards, and pull from the deck one card at a time."
			/>
			<div>
				{/* <Button text="New Deck" /> */}
				<Button
					text="New Card"
					method={async () => {
						// Extract values
						const {
							cards: [card],
							remaining,
						} = await DataService.getNewCard(deckID);

						// After drawing the second card, add each previously drawn card to the drawnCards array
						if (remainingCards < 52) {
							drawnCards.current.push(currentCard);
						}

						console.log(card, remaining, drawnCards.current);

						// Update deck state
						setCurrentCard(card);
						setRemainingCards(parseInt(remaining));
					}}
				/>
			</div>
			<div>
				<div>
					<p>Cards Remaining: {remainingCards}</p>
				</div>
				{currentCard.suit !== 'N/A' ? (
					<Card
						suit={currentCard.suit}
						value={currentCard.value}
						image={currentCard.image}
					/>
				) : null}
			</div>
		</main>
	);
};

export default CandyGame;
