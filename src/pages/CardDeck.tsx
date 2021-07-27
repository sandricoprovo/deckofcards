import React, { useEffect, useState, useRef } from 'react';

// Imported components
import Title from '../components/CardDeck/Title';
import { NewCardButton, NewDeckButton } from '../components/Buttons';
import Card from '../components/CardDeck/Card';

// Other Imports
import DataService from '../DataService';

// Types
import { CardPayload, CardType, Deck } from '../types';

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
	const drawnCards = useRef<CardType[]>([]); // tracks drawn cards

	// Takes a CardPayload object which has variables used to update the current card, remaining number of cards and the drawn cards array.
	const drawNewCard = (payload: CardPayload) => {
		// Destructure needed variables
		const {
			cards: [card],
			remaining,
		} = payload;

		// Push current card to drawn cards list before updating to new card
		if (remainingCards <= 51) drawnCards.current.unshift(currentCard);

		// Update state
		setCurrentCard(card);
		setRemainingCards(parseInt(remaining));
	};

	const drawNewDeck = (payload: Deck) => {
		console.log(payload);
		// TODO:
		// Update deck ID
		// update remaining cards
		// send deckID as payload to drawNewCard method
	};

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
				<NewDeckButton
					text="New Deck"
					getDeck={() => DataService.getNewDeck()}
					setDeck={drawNewDeck}
				/>
				<NewCardButton
					text="New Card"
					getCard={() => DataService.getNewCard(deckID)}
					setCard={drawNewCard}
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
