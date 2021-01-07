import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                        <CardItem 
                        src="images/img1.jpeg"
                        text='Explore the hidden waterfall deep inside the Amazon Jungle.'
                        label ='Advanture' 
                        path='/services' />
                        <CardItem 
                        src="images/img1.jpeg"
                        text='Travel through the Islands of Bali in a Private Cruise.'
                        label ='Luxury' 
                        path='/services' />
                    </ul>
                    <ul className='cards_items'>
                        <CardItem 
                        src="images/img1.jpeg"
                        text='Explore the hidden waterfall deep inside the Amazon Jungle.'
                        label ='Advanture' 
                        path='/services' />
                        <CardItem 
                        src="images/img1.jpeg"
                        text='Travel through the Islands of Bali in a Private Cruise.'
                        label ='Luxury' 
                        path='/products' />
                        <CardItem 
                        src="images/img1.jpeg"
                        text='Travel through the Islands of Bali in a Private Cruise.'
                        label ='Luxury' 
                        path='/sign-up' />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
