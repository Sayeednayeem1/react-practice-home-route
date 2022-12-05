import React from 'react';

const Card = ({ card }) => {
    const { img, title, price} = card;
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="all the card categories" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>This Component is all about cards</p>
                    <p>price: ${price}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline btn-ghost btn-sm">Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;