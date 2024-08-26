import React from 'react';


const Greeting = () => {
    const currentTime = new Date().getHours();

    let image;
    let greetingText;

    if (currentTime >= 6 && currentTime < 12) {
        greetingText = 'Good Morning!';
        image = '/src/assets/day.svg';
    } else if (currentTime >= 12 && currentTime < 17) {
        greetingText = 'Good Afternoon!';
        image = 'src/assets/day.svg';
    } else if (currentTime >= 17 && currentTime < 21) {
        greetingText = 'Good Evening!';
        image = 'src/assets/evening.svg'
    } else {
        greetingText = 'Good Night!'
        image = 'src/assets/night.svg'
    }

    return (
        <h1 className="greeting">
            <img src={image} alt={greetingText} />
            { greetingText }
        </h1 >
    );
};

export default Greeting;
