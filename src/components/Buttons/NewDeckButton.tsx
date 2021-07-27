import React from 'react';

// Imported Types
import { Deck } from '../../types';

interface NewDeckButtonProps {
	text: string;
	getDeck: () => Promise<Deck>;
	setDeck: (payload: Deck) => void;
}

const NewDeckButton: React.FC<NewDeckButtonProps> = ({ text, getDeck, setDeck }) => {
	return (
		<button
			type="button"
			onClick={async () => {
				// Perform async task to get new deck & send to updater function
				const newDeck = await getDeck();
				setDeck(newDeck);
			}}
		>
			{text}
		</button>
	);
};

export default NewDeckButton;
