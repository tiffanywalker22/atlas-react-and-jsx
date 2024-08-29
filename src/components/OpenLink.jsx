import React from 'react';
import openLink from '../assets/open.svg';

const OpenLink = ({ link }) => {
    const openTab = () => {
        window.open(link, '_blank');
    };

    return (
        <a href="#!" onClick={openTab}>
            <img src={openLink} alt="Open Tab" />
        </a>
    );
};

export default OpenLink;
