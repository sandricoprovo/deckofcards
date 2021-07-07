import React from 'react';

interface ButtonProps {
	text: string;
	method: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, method }) => {
	return (
		<button type="button" onClick={method}>
			{text}
		</button>
	);
};

export default Button;
