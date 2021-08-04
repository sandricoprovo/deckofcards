import React from 'react';

// Other Imports
import { TitleContainer, TitleText, SubText } from './styles';

interface Props {
	title: string;
	subTitle: string;
}

// Component
const Title: React.FC<Props> = ({ title, subTitle }) => {
	return (
		<TitleContainer>
			<TitleText>{title}</TitleText>
			<SubText>{subTitle}</SubText>
		</TitleContainer>
	);
};

// Export
export default Title;
