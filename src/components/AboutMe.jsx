import React from 'react';
import TiffanyImg from '../assets/tiffany.jpg'

const AboutMe = () => {
    return (
        <div className="about-me">
            <img src={TiffanyImg} alt="tiffany" />
            <p>
                Hello, I'm Tiffany Walker. I'm currently in my fifth trimester studying fullstack web-development. My favorite language is python, but I'm already really loving react! After I graduate, I aspire to be a technical project manager. When I'm not programming, I love to crochet, play video games, kayak, and spend time with my husband and our three cats.
            </p>
        </div>
    );
};

export default AboutMe;
