import React from 'react';

const CopyLink = ({ link }) => {
    const clipboardCopy = () => {
        navigator.clipboard.writeText(link);
        alert('Copied!');
    };

    return (
        <img src="/src/assets/copy.svg" alt="Copy Icon" className="copy" onClick={clipboardCopy} />
    );
};

export default CopyLink;
