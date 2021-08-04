import React from 'react';

// Imported Types
import { Deck } from '../../types';

// Other Imports
import { NewDeckButtonContainer } from './styles';

// Component Props
interface NewDeckButtonProps {
	text: string;
	getDeck: () => Promise<Deck>;
	setDeck: (payload: Deck) => void;
}

// Exported Component
const NewDeckButton: React.FC<NewDeckButtonProps> = ({ text, getDeck, setDeck }) => {
	return (
		<NewDeckButtonContainer
			type="button"
			onClick={async () => {
				// Perform async task to get new deck & send to updater function
				const newDeck = await getDeck();
				setDeck(newDeck);
			}}
		>
			{text}
		</NewDeckButtonContainer>
	);
};

export default NewDeckButton;
