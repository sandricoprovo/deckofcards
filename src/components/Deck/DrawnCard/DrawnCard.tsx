import React from 'react';

// Other imports
import { RowContainer } from './styles';

interface DrawnCardProps {
	suit: string;
	value: string;
}

const DrawnCard: React.FC<DrawnCardProps> = ({ suit, value }) => {
	return (
		<RowContainer>
			<td>{`${value} of ${suit}`}</td>
		</RowContainer>
	);
};

export default DrawnCard;
