import React from 'react';

// Imported Types
import { CardPayload } from '../../types';

// Other Imports
import { NewCardButtonContainer } from './styles';

interface NewCardButtonProps {
	text: string;
	getCard: () => Promise<CardPayload>;
	setCard: (payload: CardPayload) => void;
}

const NewCardButton: React.FC<NewCardButtonProps> = ({ text, getCard, setCard }) => {
	return (
		<NewCardButtonContainer
			type="button"
			onClick={async () => {
				// Perform async task to get new card & send to updater function
				const cardPayload = await getCard();
				setCard(cardPayload);
			}}
		>
			{text}
		</NewCardButtonContainer>
	);
};

export default NewCardButton;
