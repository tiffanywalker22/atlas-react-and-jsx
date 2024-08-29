import React from 'react';
import dayIcon from '../assets/day.svg';
import eveningIcon from '../assets/evening.svg';
import nightIcon from '../assets/evening.svg';

const Greeting = () => {
    const currentTime = new Date().getHours();

    let image;
    let greetingText;

    if (currentTime >= 6 && currentTime < 12) {
        greetingText = 'Good Morning!';
        image = dayIcon;
    } else if (currentTime >= 12 && currentTime < 17) {
        greetingText = 'Good Afternoon!';
        image = dayIcon;
    } else if (currentTime >= 17 && currentTime < 21) {
        greetingText = 'Good Evening!';
        image = eveningIcon;
    } else {
        greetingText = 'Good Night!'
        image = nightIcon;
    }

    return (
        <h1 className="greeting">
            <img src={image} alt={greetingText} />
            { greetingText }
        </h1 >
    );
};

export default Greeting;
