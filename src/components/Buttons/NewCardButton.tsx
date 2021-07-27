import React from 'react';

// Imported Types
import { CardPayload } from '../../types';

interface NewCardButtonProps {
	text: string;
	getCard: () => Promise<CardPayload>;
	setCard: (payload: CardPayload) => void;
}

const NewCardButton: React.FC<NewCardButtonProps> = ({ text, getCard, setCard }) => {
	return (
		<button
			type="button"
			onClick={async () => {
				// Perform async task to get new card & send to updater function
				const cardPayload = await getCard();
				setCard(cardPayload);
			}}
		>
			{text}
		</button>
	);
};

export default NewCardButton;
