import React from 'react';

// Other Imports
import { CardContainer } from './styles';

// Card Props
interface CardProps {
	suit: string;
	value: string;
	image: string;
}

const Card: React.FC<CardProps> = ({ suit, value, image }) => {
	// TODO: Update all to include card name.
	return (
		<CardContainer>
			<p>{`${value} ${suit}`}</p>
			<img src={image} alt={`${value} of ${suit} playing card.`} />
		</CardContainer>
	);
};

export default Card;
