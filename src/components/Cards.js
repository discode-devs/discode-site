import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Ok, but what does it do?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/languages.png'
              text='General documentation on various languages'
              label='Languages'
            />
            <CardItem
              src='images/people.png'
              text='Information about the amazing people behind modern day programming'
              label='People'
            />
          </ul>
          {/*<ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
            />
          </ul>*/}
        </div>
      </div>
    </div>
  );
}

export default Cards;
