import React from 'react';

// Imported components
import Title from '../components/Title';
import Button from '../components/Buttons/Button';
import Card from '../components/Card';

// Other Imports
import DataService from '../DataService';

const CandyGame: React.FC = () => {
    console.log(DataService.getNewDeck());

    return (
        <main>
            <Title
                title="52 Card Deck"
                subTitle="Get a new deck of cards, and pull from the deck one card at a time."
            />
            <div>
                <Button text="New Deck" />
                <Button text="New Card" />
            </div>
            <div>
                <Card placeHolder="No Card Yet." />
            </div>
        </main>
    );
};

export default CandyGame;
