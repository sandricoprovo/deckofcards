import React from 'react';

interface DrawnCardProps {
	suit: string;
	value: string;
}

const DrawnCard: React.FC<DrawnCardProps> = ({ suit, value }) => {
	return (
		<tr>
			<td>{`${value} of ${suit}`}</td>
		</tr>
	);
};

export default DrawnCard;
