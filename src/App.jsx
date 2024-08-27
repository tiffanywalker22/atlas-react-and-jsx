import React from 'react';
import Header from './components/Header';
import Section from './components/Section';


function App() {
  return ( <div>
    <Header />
    <Section title="What is React?">
      <p>
      React is a JavaScript library for building user interfaces, particularly for single-page applications. It is maintained by Facebook and a community of individual developers and companies. React allows developers to create large web applications that can change data without reloading the page. Its main purpose is to be fast, scalable, and simple.
      </p>
    </Section>
    <Section title="Benefits of React">
      <ul>
        <li>Reusability of code components</li>
        <li>Readily available JavaScript Libraries</li>
        <li>Works for both iOS and Android Apps</li>
        <li>Improved performance with the Virtual DOM</li>
        <li>Component-based architecture for better code organization</li>
      </ul>
    </Section>
  </div>
  );
};

export default App;
