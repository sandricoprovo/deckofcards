import React from 'react';

interface CardProps {
	suit: string;
	value: string;
	image: string;
}

const Card: React.FC<CardProps> = ({ suit, value, image }) => {
	// TODO: Update all to include card name.
	return (
		<div>
			<img src={image} alt="Playing card." />
			<p>{value}</p>
			<p>{suit}</p>
		</div>
	);
};

export default Card;
