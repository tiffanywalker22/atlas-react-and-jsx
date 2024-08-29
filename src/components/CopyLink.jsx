import React from 'react';
import copyLink from '../assets/copy.svg';

const CopyLink = ({ link }) => {
    const clipboardCopy = () => {
        navigator.clipboard.writeText(link);
        alert('Copied!');
    };

    return (
        <img src={copyLink} alt="Copy Icon" className="copy" onClick={clipboardCopy} />
    );
};

export default CopyLink;
