import React from 'react';

const SocialLinks = () => {
    return (
        <div classname="social-links" style={{ display: 'flex', alignItems: 'center'}}>
            <a href="https://www.linkedin.com/in/tiffanywalker22/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <img src="/src/assets/linkedin.svg" alt="LinkedIn" />
            </a>
            <a href="https://github.com/tiffanywalker22/atlas-react-and-jsx" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
                <img src="/src/assets/github.svg" alt="Github" />
            </a>
        </div>
    );
};

export default SocialLinks;
