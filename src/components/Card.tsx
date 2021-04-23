import React from 'react';

interface Props {
	placeHolder: string;
}

const Card: React.FC<Props> = ({ placeHolder }) => {
	return (
		<div>
			<p>{placeHolder}</p>
		</div>
	);
};

export default Card;
