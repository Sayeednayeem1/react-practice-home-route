import React, { useEffect, useState } from 'react';
import Card from './Card';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('cardsData.json')
            .then(res => res.json())
            .then(data => setCards(data));
    }, []);

    return (
        <div className='mt-10'>
            <h4 className='text-center text-green-600 text-2xl mb-8'>I love making cards! make the design so attractive!</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    cards.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;