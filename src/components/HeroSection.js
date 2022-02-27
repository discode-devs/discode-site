import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Discode</h1>
      <p>A bot to assist you with your coding needs</p>
      <div className='hero-btns'>
        <a href="https://discord.com/api/oauth2/authorize?client_id=937476981321240626&permissions=139586825280&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">
         <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
         >
           Invite
         </Button>
        </a>
        <a href="https://github.com/mazylol/discode" target="_blank" rel="noopener noreferrer">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Source Code
        </Button>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
