import React from 'react';

const OpenLink = ({ link }) => {
    const openTab = () => {
        window.open(link, '_blank');
    };

    return (
        <a href="#!" onClick={openTab}>
            <img src="/src/assets/open.svg" alt="Open Tab" />
        </a>
    );
};

export default OpenLink;
