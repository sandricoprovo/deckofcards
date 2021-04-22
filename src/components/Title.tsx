import React from 'react';

interface Props {
    title: string;
    subTitle: string;
}

// Component
const Title: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

// Export
export default Title;
