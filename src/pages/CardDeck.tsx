import React, { useEffect, useState, useRef } from 'react';
import { Toaster, toast } from 'react-hot-toast';

// Imported components
import { Title, Card, DrawnCard } from '../components/Deck';
import { NewCardButton, NewDeckButton } from '../components/Buttons';

// Other Imports
import DataService from '../utils/DataService';
import GlobalStyles from '../components/GlobalStyles';
import {
	DeckContainer,
	DeckInfo,
	DeckState,
	CurrentCardContainer,
	PrevCardsContainer,
	DeckActions,
} from '../components/Deck/styles';

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
		// Handle 0 remaining cards
		if (remainingCards <= 0) {
			toast.error('No more cards.');
			return;
		}

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

	// Takes a new deckID payload and allows the user to draw a new deck by fetching a new deckID and resetting states.
	const drawNewDeck = (payload: Deck) => {
		// If cards have already been drawn, ask the user if they really want to reset the deck.
		if (remainingCards <= 51 || drawnCards.current.length >= 1) {
			const resetDeck = window.confirm(
				'Are you sure you want to get a new deck? Your current deck progress will be lost.'
			);
			// Cancel reset if answer is false
			if (!resetDeck) return;
		}

		// Destructure variables withing payload
		const { deck_id: newDeckId, remaining, success } = payload;

		// Handle errors / unsuccessful API returns
		if (!newDeckId || success === false) {
			// Send an error notification.
			toast.error('Sorry I dropped the cards! Please try again.');
			return;
		}

		// reset drawn cards useRef
		drawnCards.current = [];
		// Update deck ID & remaining cards
		setDeckID(newDeckId);
		setRemainingCards(remaining);
		// reset current card
		setCurrentCard({ suit: 'N/A', value: 'N/A', image: 'N/A', code: 'N/A' });
	};

	useEffect(() => {
		// Fetch deck data asynchronously
		(async () => {
			// Get query response
			const newDeck = await DataService.getNewDeck();
			// set state
			setDeckID(newDeck.deck_id);
			setRemainingCards(newDeck.remaining);
		})().catch((err) => console.log(err));
	}, []);

	return (
		<>
			<GlobalStyles />
			<DeckContainer>
				<Toaster position="top-center" reverseOrder={false} />
				{/* Game Info */}
				<DeckInfo>
					<Title
						title="52 Card Deck"
						subTitle="Get a new deck of cards, and pull from the deck one card at a time."
					/>
					<DeckActions>
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
					</DeckActions>
				</DeckInfo>
				{/* Deck State */}
				<DeckState>
					<div>
						<p>Cards Remaining: {remainingCards}</p>
					</div>
				</DeckState>
				<CurrentCardContainer>
					{currentCard.suit !== 'N/A' ? (
						<Card
							suit={currentCard.suit}
							value={currentCard.value}
							image={currentCard.image}
						/>
					) : null}
				</CurrentCardContainer>
				{/* Table of Previous Cards */}
				<PrevCardsContainer>
					<thead>
						<tr>
							<td>Previously Drawn Cards</td>
						</tr>
					</thead>
					<tbody>
						{drawnCards.current.length > 0
							? drawnCards.current.map((card, index) => {
									const { suit, value } = card;

									return (
										<DrawnCard
											key={`${value}_${suit}_${index}`}
											value={value}
											suit={suit}
										/>
									);
							  })
							: null}
					</tbody>
				</PrevCardsContainer>
			</DeckContainer>
		</>
	);
};

export default CandyGame;
